// Lightweight Web Audio API gentle ambient harp & bell chime synthesizer
class AmbientSoundManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioContextClass();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.isPlaying = true;
      this.scheduleChimes();
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private scheduleChimes() {
    // Gentle Pentatonic peaceful frequencies (F, G, A, C, D)
    const notes = [349.23, 392.0, 440.0, 523.25, 587.33, 659.25];
    
    // Play initial gentle chord
    this.playTone(notes[0], 0.08);
    setTimeout(() => this.playTone(notes[2], 0.07), 300);
    setTimeout(() => this.playTone(notes[3], 0.06), 650);

    // Loop soft notes every 3.5 - 5 seconds
    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.playTone(note, 0.06);
    }, 3800);
  }

  private playTone(freq: number, gainVal: number) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainVal, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.5);
    } catch {
      // Audio context might be restricted
    }
  }
}

export const ambientSound = new AmbientSoundManager();
