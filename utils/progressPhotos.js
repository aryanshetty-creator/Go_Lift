// Progress photo management

export const progressPhotos = {
    savePhoto(photoData, date = new Date()) {
        const photos = this.getPhotos();
        const entry = {
            id: Date.now(),
            date: date.toISOString(),
            photo: photoData,
            notes: ''
        };
        photos.push(entry);
        localStorage.setItem('progress_photos', JSON.stringify(photos));
        return entry;
    },

    getPhotos() {
        const photos = localStorage.getItem('progress_photos');
        return photos ? JSON.parse(photos) : [];
    },

    getPhotoById(id) {
        const photos = this.getPhotos();
        return photos.find(p => p.id === id);
    },

    deletePhoto(id) {
        const photos = this.getPhotos();
        const filtered = photos.filter(p => p.id !== id);
        localStorage.setItem('progress_photos', JSON.stringify(filtered));
        return true;
    },

    updateNotes(id, notes) {
        const photos = this.getPhotos();
        const photo = photos.find(p => p.id === id);
        if (photo) {
            photo.notes = notes;
            localStorage.setItem('progress_photos', JSON.stringify(photos));
            return photo;
        }
        return null;
    },

    getPhotosByDateRange(startDate, endDate) {
        const photos = this.getPhotos();
        return photos.filter(p => {
            const photoDate = new Date(p.date);
            return photoDate >= startDate && photoDate <= endDate;
        });
    },

    comparePhotos(id1, id2) {
        return {
            before: this.getPhotoById(id1),
            after: this.getPhotoById(id2)
        };
    }
};
