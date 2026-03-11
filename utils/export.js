// Export workout data utilities

export const exportData = {
    toJSON(data) {
        return JSON.stringify(data, null, 2);
    },

    toCSV(workouts) {
        if (!workouts || workouts.length === 0) return '';
        
        const headers = Object.keys(workouts[0]).join(',');
        const rows = workouts.map(workout => 
            Object.values(workout).join(',')
        );
        
        return [headers, ...rows].join('\n');
    },

    downloadJSON(data, filename = 'workout-data.json') {
        const blob = new Blob([this.toJSON(data)], { type: 'application/json' });
        this.downloadBlob(blob, filename);
    },

    downloadCSV(data, filename = 'workout-data.csv') {
        const blob = new Blob([this.toCSV(data)], { type: 'text/csv' });
        this.downloadBlob(blob, filename);
    },

    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    importJSON(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            return null;
        }
    }
};
