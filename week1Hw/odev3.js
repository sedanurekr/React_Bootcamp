/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

 const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]


  function move(fileId, folderId) {
    var file = folders.map((folder) => folder.files)
      .flat()
      .find((file) => file.id === fileId);
  
    var folderIndex = folders.findIndex((folder) => folder.id === folderId);
  
    if (!Object.hasOwn(folders[folderIndex], 'files')) {
      folders[folderIndex]["files"] = [];
    }
    folders[folderIndex].files.push(file);
    console.log(folders)
  }

  
  function copy(fileId, folderId) {
    var file = folders.map((folder) => folder.files)
      .flat()
      .find((file) => file.id === fileId);
  
    var folderIndex = folders.findIndex((folder) => folder.id === folderId);
  
    if (!Object.hasOwn(folders[folderIndex], 'files')) {
      folders[folderIndex]["files"] = [];
    }
    folders[folderIndex].files.push(file);
    console.log(folders)
  }
  
  function remove(fileId) {
    folders.forEach(function (folder) {
      if (Object.hasOwn(folder, 'files')) {
        folder.files = folder.files.filter(file => file.id !== fileId)
      }
    });
    console.log(folders)
  }
  
  function removeFolder(folderId) {
    console.log(folders.filter((folder) => folder.id !== folderId));
  }
  
  function parentFolderOf(fileId) {
    var folderIndex = folders.findIndex((folder) => {
      if (Object.hasOwn(folder, 'files')) {
        if (folder.files.some((file) => file.id === fileId)) {
          return true;
        }
      }
      return false;
    });
  
    console.log(folders[folderIndex].id)
  }

move(17,6) // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5