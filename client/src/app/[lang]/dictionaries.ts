import 'server-only'

interface DictionaryHome {
  title: string
  explain: string
  subtitle: string
  firstExplain: string
  secondExplain: string
  thirdExplain: string
  fortyExplain: string
  fiveExplain: string
  sixExplain: string
  definition: string
}

type Dictionary = 'es' | 'en'

export const dictionaryHome: Record<Dictionary, DictionaryHome> = {
  en: {
    title: 'Welcome to our advanced logistics application!',
    explain: 'Our logistics application is a comprehensive solution for efficiently managing your warehouses and associated storage processes. With an intuitive interface and powerful features, we are here to simplify and streamline your logistics operations.',
    subtitle: 'Key Features:',
    firstExplain: 'Warehouse Management: You can create and manage multiple warehouses, assign products to specific locations within them, and track inventory levels in real-time. Our application allows you to optimize storage space and minimize management errors.',
    secondExplain: 'Product Movements: Generate delivery notes to facilitate internal product movements between different locations within your warehouses. You can easily record and track each movement for comprehensive inventory control.',
    thirdExplain: 'Shipment Management: Organize and coordinate product shipments to your customers efficiently. Our application enables you to record shipment details, generate shipping labels, and track shipments in real-time to ensure successful delivery.',
    fortyExplain: 'Product Purchases: Place orders for products and maintain a record of your suppliers. You can centrally manage your purchases, monitor delivery times, and ensure that you have the right products in stock.',
    fiveExplain: 'Administration: Our application also includes a comprehensive administration section. Here, you can manage employee salaries, handle vacation requests, and record purchase and sales receipts. Additionally, you can track dismissals and perform other key administrative tasks.',
    sixExplain: 'Analysis and Statistics: We provide a variety of charts and visualizations to help you better understand the performance of your logistics operations. You can explore weekly and monthly data to identify trends, pinpoint areas for improvement, and make informed decisions.',
    definition: 'Our logistics application is an all-encompassing tool to optimize your processes, increase efficiency, and enhance the productivity of your business. Download now and discover how to simplify your logistics management!'
  },
  es: {
    title: '¡Bienvenido a nuestra aplicación de logística avanzada!',
    explain: 'Nuestra aplicación de logística es una solución completa para gestionar eficientemente tus depósitos y los procesos de almacenamiento asociados. Con una interfaz intuitiva y poderosas funcionalidades, estamos aquí para simplificar y agilizar tus operaciones logísticas.',
    subtitle: 'Características principales:',
    firstExplain: 'Gestión de depósitos: Puedes crear y administrar múltiples depósitos, asignar productos a ubicaciones específicas dentro de ellos y realizar un seguimiento detallado de los niveles de inventario en tiempo real. Nuestra aplicación te permite optimizar el espacio de almacenamiento y minimizar los errores de gestión.',
    secondExplain: 'Movimientos de productos: Genera remitos para realizar movimientos internos de productos entre diferentes ubicaciones dentro de tus depósitos. Puedes registrar y rastrear fácilmente cada movimiento para un control exhaustivo del inventario.',
    thirdExplain: 'Gestión de envíos: Organiza y coordina envíos de productos a tus clientes de manera eficiente. Nuestra aplicación te permite registrar los detalles de los envíos, generar etiquetas de envío y realizar un seguimiento en tiempo real para garantizar una entrega exitosa.',
    fortyExplain: 'Compras de productos: Realiza pedidos de productos y lleva un registro de tus proveedores. Puedes gestionar tus compras de manera centralizada, controlar los tiempos de entrega y asegurarte de tener los productos adecuados en stock.',
    fiveExplain: 'Administración: Nuestra aplicación también cuenta con una completa sección de administración. Aquí puedes controlar los sueldos de tus empleados, administrar las vacaciones y registrar los tickets de compra y venta. Además, podrás llevar un registro de despidos y realizar otras tareas administrativas clave.',
    sixExplain: 'Análisis y estadísticas: Ofrecemos una variedad de gráficos y visualizaciones para ayudarte a comprender mejor el rendimiento de tus operaciones logísticas. Puedes explorar datos semanales y mensuales para identificar tendencias, detectar áreas de mejora y tomar decisiones informadas.',
    definition: 'Nuestra aplicación de logística es una herramienta integral para optimizar tus procesos, aumentar la eficiencia y mejorar la productividad de tu negocio. ¡Descarga ahora y descubre cómo simplificar tu gestión logística!'
  }
}
