import React from 'react';
import { useNotesStore } from '../../store/notes';
import { Button } from '../ui/button';
import { Star, Trash2 } from 'lucide-react';
import { formatDate } from '../../lib/utils';

export const NoteList: React.FC = () => {
  const { notes, deleteNote, highlightNote } = useNotesStore();

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Notas ({notes.length})</h2>
      </div>
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-lg border ${
              note.highlighted
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 bg-white'
            } shadow-sm transition-all duration-200`}
          >
            {note.title && (
              <h3 className="font-semibold text-lg mb-2">{note.title}</h3>
            )}
            <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span>{formatDate(note.updatedAt)}</span>
              <div className="space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => highlightNote(note.id)}
                >
                  <Star
                    className={`h-4 w-4 ${
                      note.highlighted ? 'fill-yellow-500 text-yellow-500' : ''
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteNote(note.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};