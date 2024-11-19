import {Image, Text, View} from "react-native";
import React, {useState} from "react";
import {BookCardStyles} from "./BookCardStyles.ts";
import Button from "../Button";
import {Book} from "../../core/entities/Book";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import BookDetail from "../BookDetail";
import {statusColors} from "../BookDetail/BookDetailStyles.ts";
import {CreateBookDto} from "../../core/repositories/Book";
import {createBook, deleteBook, updateBookStatus} from "../../core/services/Book";
import Toast from "react-native-toast-message";
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";
import {BookStatus} from "../../core/entities/BookStatus";

const BookCard = (initialBook: Book) => {
    const {currentTheme} = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [book, setBook] = useState(initialBook);
    const {showLoader, hideLoader} = useLoader();

    const bookCardStyles = BookCardStyles(currentTheme);

    const handleChangeStatus = async (status: BookStatus) => {
        showLoader();
        let responseBook: Book;

        if (!book._id) {
            const createBookDto: CreateBookDto = {
                idGoogle: book.idGoogle,
                status
            }
            responseBook = await createBook(createBookDto).finally(() => {
                hideLoader()
                setModalVisible(false)
            });
            setBook(responseBook);
        }
        if (book._id) {
            responseBook = await updateBookStatus(status, book._id).finally(() => {
                hideLoader();
                setModalVisible(false)
            });
            setBook(responseBook);
        }

        Toast.show({
            type: 'success',
            text1: 'Operation Successful',
            text2: 'The save operation was completed.'
        });
    };

    const handleDeleteItem = async () => {
        setModalVisible(false);
        Toast.show({
            type: 'deleteConfirmation',
            position: 'top',
            text1: 'Delete Record',
            text2: 'Are you sure you want to delete this record?',
            visibilityTime: 4000,
            autoHide: false,
            topOffset: 0,
            bottomOffset: 0,
            props: {
                onConfirm: async () => {
                    showLoader();
                    await deleteBook(book._id).finally(() => {
                        hideLoader();
                        Toast.hide();
                    });
                },
                onCancel: () => {
                    Toast.hide();
                    setModalVisible(true);
                },
            },
        });
    };

    return (
        <View style={bookCardStyles.bookCard}>
            {(book.status && <View style={bookCardStyles.statusContainer}>
                    <View style={[bookCardStyles.statusBadge, {backgroundColor: statusColors[book.status]}]}>
                        <Text style={bookCardStyles.statusText}>
                            {book.status ? book.status.charAt(0).toUpperCase() + book.status.slice(1) : 'No Status'}
                        </Text>
                    </View>
                </View>
            )}
            <Image source={{uri: book.coverImage ? book.coverImage : "https://via.placeholder.com/130x200.png",}}
                   style={bookCardStyles.bookImage}/>
            <View style={bookCardStyles.bookInfo}>
                <Text style={bookCardStyles.bookTitle}
                      numberOfLines={1}>{book.title}</Text>
                <Text style={bookCardStyles.bookAuthor}>{book.author}</Text>
                <Text style={bookCardStyles.publishedDate}>
                    Published: {new Date(book.publishedDate).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                })}
                </Text>
                <View style={bookCardStyles.ratingContainer}>
                    <Text style={bookCardStyles.ratingStar}>★</Text>
                    <Text
                        style={bookCardStyles.ratingText}>{book.averageRating ?? 'No rating'}</Text>
                </View>
            </View>
            <Button
                title="See More"
                onPress={() => setModalVisible(true)}
                buttonStyle={bookCardStyles.seeMoreButton}
                textStyle={bookCardStyles.seeMoreText}
            />
            <BookDetail
                book={book}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onDelete={handleDeleteItem}
                onUpdate={handleChangeStatus}
            />
        </View>
    );
}

export default BookCard;
