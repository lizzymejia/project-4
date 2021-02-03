while (true) {
    if (input.acceleration(Dimension.Z) > 0) {
        light.setAll(light.rgb(78, 129, 255))
    } else {
        light.clear()
    }
    
}
