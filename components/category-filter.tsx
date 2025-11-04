"use client"

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-foreground hover:border-primary/50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
