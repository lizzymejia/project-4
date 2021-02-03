while True:
    if input.acceleration(Dimension.Z) > 0:
        light.set_all(light.rgb(78,129,255))
        
    else:
        light.clear()
        