-- object_of_objects_018_load.lua

-- 1. RAW DATA (In Lua, we just store data natively in tables!)
local worldData = {
    tree_01 = {
        type = "oak",
        x = 100,
        y = 200,
        collidable = true
    },
    rock_01 = {
        type = "boulder",
        x = 300,
        y = 150,
        collidable = true
    },
    flower_01 = {
        type = "daisy",
        x = 460,
        y = 300,
        collidable = false
    }
}

-- 2. OUR GLOBAL WORLD CONTAINER
-- (We omit the word 'local' so it stays accessible everywhere!)
world = {}

-- 3. THE ENTITY BUILDER (Factory Function)
-- In Lua, functions are standard blocks ending with 'end'
local function createEntity(id, data)
    return {
        id = id,
        type = data.type,
        x = data.x,
        y = data.y,
        collidable = data.collidable
    }
end

-- 4. THE FACTORY LOADER
local function loadWorld(sourceData)
    local newWorld = {}

    -- pairs() is Lua's exact equivalent to JavaScript's 'for (let id in raw)'
    for id, data in pairs(sourceData) do
        newWorld[id] = createEntity(id, data)
    end

    return newWorld
end

-- 5. EXECUTION: Catch the returned table and save it to our global 'world'!
world = loadWorld(worldData)

-- --- PROVE THE GLOBAL ACCESS WORKS ---
-- In Lua, we use two dots ( .. ) to concatenate strings instead of the plus sign ( + )
print("Tree 01 X coordinate: " .. world.tree_01.x) -- 100
print("Rock 01 is collidable? " .. tostring(world.rock_01.collidable)) -- true

-- Modifying our global world instantly updates the data in memory
world.tree_01.x = 150
print("New Tree 01 X coordinate: " .. world.tree_01.x) -- 150

--[[
Dedicated to God the Father
All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
https://github.com/ChristopherTopalian
https://github.com/ChristopherAndrewTopalian
]]