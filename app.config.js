module.exports = {
    apps: [
      {
        name: "MAIN",
        namespace: "JaylenOzi",
        script: 'ozi.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "1G",
        cwd: "./Ozi-Bots/JaylenOzi-Main",
        output: '../../../Logger/[1]out.log',
        error: '../../../Logger/[2]error.log',
        log: '../../../Logger/[3]combined.outerr.log'
      },
      {
        name: "GUARD",
        namespace: "JaylenOzi",
        script: 'ozi.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "1G",
        cwd: "./Ozi-Bots/JaylenOzi-Guard",
        output: '../../../Logger/[1]out.log',
        error: '../../../Logger/[2]error.log',
        log: '../../../Logger/[3]combined.outerr.log'
      },
      {
        name: "DESTEK",
        namespace: "JaylenOzi",
        script: 'ozi.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "1G",
        cwd: "./Ozi-Bots/JaylenOzi-Destek",
        output: '../../../Logger/[1]out.log',
        error: '../../../Logger/[2]error.log',
        log: '../../../Logger/[3]combined.outerr.log'
      },
    ]
  };