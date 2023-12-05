// requires: create_bic_bit
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.remove([
        { id: 'create_bic_bit:frikandel_sandwich_recipe' },
        { id: '' }
    ])
})