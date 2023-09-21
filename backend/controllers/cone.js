const calculateConeTriangulation = (height, radius, segments) => {
    const triangulation = []; // массив, заполняющийся треугольниками
    
    const vertexA = { x: 0, y: 0, z: height }; // вычисление координаты вершины конуса
    
    for (let i = 0; i < segments; i++) {
      const angle1 = (2 * Math.PI * i) / segments; // первый угол сегмента
      const angle2 = (2 * Math.PI * (i + 1)) / segments; // второй угол сегмента
    
      const x1 = radius * Math.cos(angle1); // координата x первого угла сегмента
      const y1 = radius * Math.sin(angle1); // координата y первого угла сегмента
      const z1 = 0; // всегда равен 0, так как точка находится на плоскости XY
    
      const x2 = radius * Math.cos(angle2); // координата x второго угла сегмента
      const y2 = radius * Math.sin(angle2); // координата y второго угла сегмента
      const z2 = 0;
    
      // Создаем треугольник с вершинами A, Pi, Pi+1
      const triangle = [
        { x: vertexA.x, y: vertexA.y, z: vertexA.z },
        { x: x1, y: y1, z: z1 },
        { x: x2, y: y2, z: z2 },
      ];
    
      // Добавляем треугольник в массив triangulation
      triangulation.push(triangle);
    }
    
    return triangulation;
  };
  
  const editCone = (req, res, next) => {
    const { height, radius, segments } = req.body;
  
    const triangulation = calculateConeTriangulation(height, radius, segments);
  
    res.json({ triangulation });
  };
  
  module.exports = {
    editCone,
  };
  