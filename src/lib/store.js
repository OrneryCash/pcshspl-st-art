import { browser } from "$app/environment";
import { writable } from "svelte/store";

const c_room = [
    {
        room: 1,
        active: true
    },
    {
        room: 2,
        active: false
    },
    {
        room: 3,
        active: false
    },
    {
        room: 4,
        active: false
    },
    {
        room: 5,
        active: false
    },
    {
        room: 6,
        active: false
    }
] 

export const classroom = writable(c_room)

if (browser) {
    classroom.set(JSON.parse(localStorage.getItem("classroom")) || c_room)
    classroom.subscribe(value => {
        localStorage.setItem("classroom", JSON.stringify(value))
    })
}