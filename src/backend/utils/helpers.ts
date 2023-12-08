class Helper {
    static loadHomeScripts = (): void => {
      const scriptList = [
        '/assets/js/simplebar.min.js',
        '/assets/js/amcharts/index.js',
        '/assets/js/amcharts/map.js',
        '/assets/js/amcharts/worldLow.js',
        '/assets/js/amcharts/Animated.js',
        '/assets/js/apex/analytics-chart.js'
      ];
  
      scriptList.forEach((scriptUrl, index) => {
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          document.head.appendChild(script);
        }, index * 200); // Adjust the delay as needed
      });
    };
  }
  
  export default Helper;
  