import { create } from 'zustand';

interface Note {
  id: string;
  title?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  highlighted: boolean;
}

interface NotesState {
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, content: string, title?: string) => void;
  deleteNote: (id: string) => void;
  highlightNote: (id: string) => void;
  clearNotes: () => void;
}

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          ...note,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),
  updateNote: (id, content, title) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id
          ? { ...note, content, title, updatedAt: new Date() }
          : note
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
  highlightNote: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, highlighted: !note.highlighted } : note
      ),
    })),
  clearNotes: () => set({ notes: [] }),
}));