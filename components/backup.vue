          for (let index = 0; index < this.containerOffsets.length; index++) {
            var active = false;
            //check initial frame
            if (index === 0) {
              if (
                this.previousScrollPos >= 0 &&
                this.previousScrollPos <=
                  Number(this.containerOffsets[index].width) + clientWidthTimes2
              ) {
                active = true;
              }
            } else {
              console.log(this.containerOffsets[index].container,this.previousScrollPos,runningWidth - clientWidthTimes2,Number(runningWidth + Number(this.containerOffsets[index].width) + clientWidthTimes2))
              if (
                this.previousScrollPos >=
                  (runningWidth - clientWidthTimes2 || 0) &&
                this.previousScrollPos <=
                  Number(
                    runningWidth +
                      Number(this.containerOffsets[index].width) +
                      clientWidthTimes2
                  )
              ) {
                active = true;
              }
            }

            if (index > 0 && active != true) {
              if (
                this.previousScrollPos > runningWidth &&
                this.previousScrollPos <
                  Number(
                    runningWidth + Number(this.containerOffsets[index].width)
                  )
              ) {
                active = true;
              }
            }

            runningWidth += Number(this.containerOffsets[index].width);
            this.activeLayers[this.containerOffsets[index].container] = active;
          }
          