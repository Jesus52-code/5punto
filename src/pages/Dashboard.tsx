import React from 'react';
import { Header } from '../components/layout/Header';
import { NoteEditor } from '../components/notes/NoteEditor';
import { NoteList } from '../components/notes/NoteList';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <NoteEditor />
          <NoteList />
        </div>
      </main>
    </div>
  );
};