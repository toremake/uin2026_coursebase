# Pokédex Project - Bugs to Fix 🐛

This document lists all the intentional bugs introduced into the Pokédex project. Students need to find and fix these bugs to make the project work correctly.

## 🚨 Compilation Errors (Must fix these first!)

### Bug 1: Missing React Import
**File:** `src/components/SearchBar.jsx`
**Problem:** `useState` is used but not imported
**Line:** 3 (commented out import)
**Error:** `'useState' is not defined`
**Fix:** Uncomment the useState import: `import { useState } from 'react'`

### Bug 2: Missing async keyword
**File:** `src/pages/Home.jsx`  
**Problem:** Function uses `await` without being declared as `async`
**Lines:** 10-14
**Error:** `'await' expressions are only allowed within async functions`
**Fix:** Add `async` keyword to the getData function: `const getData = async(url, set) => {`

### Bug 3: Missing JSX closing tag
**File:** `src/pages/Home.jsx`
**Problem:** JSX fragment `<>` is not closed with `</>`
**Lines:** 22-30
**Error:** `JSX fragment has no corresponding closing tag`
**Fix:** Add `</>` before the closing parenthesis of the return statement

### Bug 4: Missing useState Import  
**File:** `src/pages/SearchResults.jsx`
**Problem:** `useState` is used but not imported
**Line:** 1 (missing from import statement)
**Error:** `'useState' is not defined` 
**Fix:** Add useState to the import: `import { useEffect, useState } from "react"`

### Bug 5: Wrong CSS file path
**File:** `src/components/TypeList.jsx`
**Problem:** Importing non-existent CSS file
**Line:** 2
**Error:** Module not found - can't resolve '../styles/type.scss'
**Fix:** Change import to: `import "../styles/types.scss"`

## ⚠️ Runtime Errors

### Bug 6: Missing useEffect dependency
**File:** `src/pages/SearchResults.jsx`
**Problem:** useEffect is missing searchQuery in dependency array
**Line:** 20-22
**Error:** Function will not re-run when searchQuery changes
**Fix:** Add searchQuery to dependency array: `},[searchQuery])`

### Bug 7: Wrong prop name
**File:** `src/components/PokemonList.jsx` 
**Problem:** PokemonCard expects `url` prop but receives `pokemonUrl`
**Line:** 6
**Error:** PokemonCard won't receive the URL to fetch data
**Fix:** Change prop name: `url={pokemon.url}`

### Bug 8: Typo in function name
**File:** `src/components/Layout.jsx`
**Problem:** setSearchQuery is misspelled as setSearchQuerry
**Line:** 14
**Error:** Function doesn't exist, search won't work
**Fix:** Correct the spelling: `setSearchQuery={setSearchQuery}`

### Bug 9: Wrong CSS class name
**File:** `src/components/PokemonList.jsx`
**Problem:** CSS class "flexs" doesn't exist, should be "flex"
**Line:** 4
**Error:** Styling won't be applied correctly
**Fix:** Change className to: `className="flex"`

### Bug 10: Missing key prop in map
**File:** `src/components/TypeList.jsx`
**Problem:** Missing key prop when mapping over array
**Line:** 15
**Error:** React warning about missing key prop
**Fix:** Add key prop: `<article key={type.id} className={...}>`

## 🔧 Code Quality Issues

### Bug 11: Undefined variable reference
**File:** `src/pages/Pokemon.jsx`
**Problem:** Console.log references undefined variable `pokemonData`
**Line:** 15
**Error:** ReferenceError in console
**Fix:** Change to: `console.log(data)`

### Bug 12: Missing try-catch block
**File:** `src/components/PokemonCard.jsx`
**Problem:** Async function doesn't handle errors
**Lines:** 5-9
**Error:** Unhandled promise rejections
**Fix:** Wrap fetch in try-catch block

### Bug 13: Unused state setter
**File:** `src/pages/SearchResults.jsx`
**Problem:** setSearchResults is used but useState wasn't imported initially
**Line:** 13
**Error:** Once useState is imported, this should work
**Fix:** This will work once Bug 4 is fixed

## 🎯 Learning Objectives

By fixing these bugs, students will learn:
- ✅ How to properly import React hooks
- ✅ Async/await syntax and error handling  
- ✅ JSX syntax and proper tag closing
- ✅ CSS import paths and file references
- ✅ React props and component communication
- ✅ useEffect dependencies and re-rendering
- ✅ Array mapping and key props
- ✅ Variable naming and typos debugging
- ✅ CSS class naming conventions
- ✅ Error handling with try-catch blocks

## 🚀 Success Criteria

The project should run without console errors and:
1. Display Pokemon cards on the home page
2. Show Pokemon types with correct styling
3. Allow searching for Pokemon
4. Navigate between pages without crashes
5. Display individual Pokemon details

## 💡 Debugging Tips

1. **Read error messages carefully** - they usually tell you exactly what's wrong
2. **Check the browser console** - runtime errors appear there
3. **Verify import statements** - make sure all required dependencies are imported
4. **Check file paths** - ensure they point to existing files
5. **Look for typos** - variable names and function names must match exactly
6. **Use React Developer Tools** - to inspect component props and state

Good luck debugging! 🍀
