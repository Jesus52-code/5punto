import React, { useState, useEffect } from 'react';
import { useNotesStore } from '../../store/notes';
import { Button } from '../ui/button';
import { Save, Trash2, FileDown } from 'lucide-react';

export const NoteEditor: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { addNote, notes } = useNotesStore();

  const handleSave = () => {
    if (content.trim()) {
      addNote({ content, title: title.trim() || undefined, highlighted: false });
      setContent('');
      setTitle('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  const exportNotes = () => {
    const notesText = notes
      .map((note) => `${note.title ? note.title + '\n' : ''}${note.content}\n\n`)
      .join('---\n\n');
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
      <input
        type="text"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu nota aquí..."
        className="w-full h-40 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
      <div className="flex justify-between">
        <Button onClick={handleSave} className="flex items-center">
          <Save className="mr-2 h-4 w-4" />
          Guardar (Ctrl+S)
        </Button>
        <Button variant="outline" onClick={exportNotes}>
          <FileDown className="mr-2 h-4 w-4" />
          Exportar notas
        </Button>
      </div>
    </div>
  );
};