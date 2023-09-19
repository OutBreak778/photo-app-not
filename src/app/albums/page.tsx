import cloudinary from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-evenly">
          <h1 className="text-4xl font-bold underline underline-offset-[12px]">Albums</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mx-24">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}
