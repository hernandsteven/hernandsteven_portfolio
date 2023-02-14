interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="w-fit rounded-md bg-gray-800 px-2 py-1 text-sm font-medium text-white shadow-sm">
      {tag}
    </div>
  )
}
