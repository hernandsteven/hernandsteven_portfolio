interface TagProps {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="md:text-md w-fit rounded-md border  border-gray-800 bg-gradient-to-r from-gray-800  to-transparent px-2 py-1 text-sm font-medium text-white shadow-sm shadow-sm shadow-gray-800">
      {tag}
    </div>
  )
}
