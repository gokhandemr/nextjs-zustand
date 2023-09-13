import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const countStore = create(
    persist(
        (set, get) => ({
            count: 0,
            incCount: () => set({ count: get().count + 1 }),
            decCount: () => set({ count: get().count - 1 })
        }),
        {
            name: 'count-value', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

export const todoStore = create(
    persist(
        (set) => ({
            todo: [],
            value: '',
            addTodo: () => set((state) => ({ todo: [...state.todo, state.value] })),
            deleteTodo: (todo) => set(({ todo: todo })),
            setValue: (value) => set(({ value: value }))
        }),
        {
            name: 'todos', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

export const fetchStore = create((set) => ({
    posts: [],
    fetchPost: async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log('kaç defa çalıştığını gör');
        set({ posts: await result.json() })
    }
}))