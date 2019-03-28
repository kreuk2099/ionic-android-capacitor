

Para integrar capacitor a un proyecto:
1. npm start proyecto1 blank 	---> Iniciar proyecto
2. cd proyecto1			---> Cambiar a carpeta de proyecto
3. npm run build		---> Procesar typescrit a javascript, se genera carpeta www
4. npm install --save @capacitor/cli @capacitor/core	---> instalar capacitor en package.json (es donde se instalan todas las dependencias)
5. npx cap init PushNotification2099 appId com.parrillerosmx.uid	---> npx se refiere a como se ejecutan comandos de las dependencias en package.json, se toman de capacitor/cli 	
6. npx cap add android		---> agregar proyecto android 
7. en consoloa firebase, integrar a android ---> descargar google services
8. abrir proyecto /android en android studio ---> file -> Sync Project with Gradle File
9. ya es posible ejecutar la app en el dispositivo virtual

10. npm run build --> para pasar a www lo que haga en ionic
10.a. npx cap copy --> comando para copiar lo que haga en ionic (de carpeta www) a android
10.b. ionic cap run android -l
11. Cloud messaging ---> Para mandar notificaciones push de prueba
12. firebase  ---> Se emplea el módulo de database

tecnologia usada:

ionic
ionic native
apache cordova 	---> para notificaciones push; es el puete para ionic y las aplicaciones nativas
capacitor 	---> puente como ionic native para puente entre las aplicaciones y capa web; desarrollada por ionic
			permite ser ejecutado en ios, android, electron y como PWA
