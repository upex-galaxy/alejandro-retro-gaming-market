import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function getInitials(name: string): string {
  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
}

function UserCard({ id, name }: { id: string; name: string }) {
  return (
    <div className="relative group border rounded-lg p-4 flex items-center gap-4 bg-white/10">
      <Avatar className="w-16 h-16">
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold tracking-tight text-white">{name}</h3>
        <Link href={`/profile/${id}`} className="text-sm text-gray-300 hover:underline" prefetch={false}>
          Ver Perfil
        </Link>
      </div>
    </div>
  );
}

export default function UsersPage() {
  const users = [
    { id: '1', name: 'RetroGamer123' },
    { id: '2', name: 'PixelPete' },
    { id: '3', name: '8BitBelle' },
    { id: '4', name: 'ConsoleKing' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8 text-white">Usuarios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}