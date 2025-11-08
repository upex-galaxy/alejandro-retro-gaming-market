function Comment({ author, text }: { author: string; text: string }) {
  return (
    <div className="bg-white/10 rounded-lg p-4">
      <p className="font-semibold text-white">{author}</p>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

export default function ProfilePage({ params }: { params: { userId: string } }) {
  const user = {
    id: params.userId,
    name: 'RetroGamer123',
    avatar: 'https://source.unsplash.com/random/128x128/?gamer,avatar',
    bio: 'Lover of all things retro. Collector of classic consoles and games. Always up for a trade!',
  };

  const comments = [
    { author: 'PixelPete', text: 'Great seller! The console was in perfect condition.' },
    { author: '8BitBelle', text: 'Fast shipping and excellent communication. Highly recommended!' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
        <img
          src={user.avatar}
          alt={user.name}
          width={128}
          height={128}
          className="object-cover w-32 h-32 rounded-full"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white">{user.name}</h1>
          <p className="text-gray-300 mt-2">{user.bio}</p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Comentarios</h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}