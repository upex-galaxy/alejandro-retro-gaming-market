import Link from 'next/link';

function UserCard({ id, name, avatar }: { id: string; name: string; avatar: string }) {
  return (
    <div className="relative group border rounded-lg p-4 flex items-center gap-4 bg-white/10">
      <img
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="object-cover w-16 h-16 rounded-full"
      />
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
    { id: '1', name: 'RetroGamer123', avatar: 'https://source.unsplash.com/random/64x64/?gamer,avatar' },
    { id: '2', name: 'PixelPete', avatar: 'https://source.unsplash.com/random/64x64/?gamer,avatar,man' },
    { id: '3', name: '8BitBelle', avatar: 'https://source.unsplash.com/random/64x64/?gamer,avatar,woman' },
    { id: '4', name: 'ConsoleKing', avatar: 'https://source.unsplash.com/random/64x64/?gamer,avatar,king' },
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