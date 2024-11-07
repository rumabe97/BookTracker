import React, {useCallback, useState} from 'react';
import {Image, Modal, ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Book} from "../../core/entities/Book";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faBook,
    faCalendar,
    faChevronDown,
    faChevronUp,
    faClock,
    faHashtag,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {BookDetailStyles, statusColors} from "./BookDetailStyles.ts";
import ModalList from "../ModalList";
import {BookStatus, getStatusOptions} from "../../core/entities/BookStatus/BookStatus.ts";
import {createBook, updateBookStatus} from "../../core/services/Book";
import {CreateBookDto} from "../../core/repositories/Book";
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";


const BookDetail = ({book, isVisible, onClose}: { book: Book; isVisible: boolean; onClose: () => void }) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [status, setStatus] = useState(book.status);
    const [modalVisible, setModalVisible] = useState(false);
    const {currentTheme} = useTheme();
    const bookDetailStyles = BookDetailStyles(currentTheme);
    const {showLoader, hideLoader} = useLoader();

    const handleAddToWishlist = async () => {
        showLoader();
        if (!book._id) {
            const createBookDto: CreateBookDto = {
                idGoogle: book.idGoogle,
                status
            }
            await createBook(createBookDto).finally(() => hideLoader());
            onClose();
            return;
        }
        await updateBookStatus(status, book._id).finally(() => hideLoader());
        onClose();
    };

    const handleSelectStatus = useCallback((status: BookStatus) => {
        setStatus(status);
    }, [])
    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={bookDetailStyles.centeredView}>
                    <TouchableWithoutFeedback>
                        <View style={bookDetailStyles.modalView}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={bookDetailStyles.header}>
                                    <View style={bookDetailStyles.titleContainer}>
                                        <Text style={bookDetailStyles.modalTitle}>{book.title}</Text>
                                        {(book.subTitle &&
                                            <Text style={bookDetailStyles.modalAuthor}>{book.subTitle}</Text>)}
                                        <Text style={bookDetailStyles.modalAuthor}>{book.author}</Text>
                                    </View>
                                    <Image
                                        source={{uri: book.coverImage || 'https://via.placeholder.com/150x225'}}
                                        style={bookDetailStyles.coverImage}
                                    />
                                </View>

                                <View style={bookDetailStyles.infoContainer}>
                                    <View style={bookDetailStyles.statusContainer}>
                                        <Button
                                            title={status ? status.charAt(0).toUpperCase() + status.slice(1) : 'No Status'}
                                            onPress={() => setModalVisible(true)}
                                            buttonStyle={[bookDetailStyles.statusBadge, {backgroundColor: statusColors[status] || statusColors.NoStatus}]}
                                            textStyle={bookDetailStyles.statusText}
                                        />
                                        <ModalList options={getStatusOptions()} isVisible={modalVisible}
                                                   onClose={() => setModalVisible(false)}
                                                   itemSelected={handleSelectStatus}/>
                                    </View>
                                    <View style={bookDetailStyles.ratingContainer}>
                                        <FontAwesomeIcon icon={faStar} color={'#FFD700'}/>
                                        <Text
                                            style={bookDetailStyles.ratingText}>{book.averageRating ?? 'No rating'}</Text>
                                    </View>
                                    <View style={bookDetailStyles.infoRow}>
                                        <FontAwesomeIcon icon={faBook} color={currentTheme.textColor}/>
                                        <Text style={bookDetailStyles.infoTextGenre}
                                              numberOfLines={1}
                                              ellipsizeMode="tail"
                                        >{book.genre} </Text>
                                    </View>
                                    <View style={bookDetailStyles.infoRow}>
                                        <FontAwesomeIcon icon={faHashtag} color={currentTheme.textColor}/>
                                        <Text style={bookDetailStyles.infoText}>{book.pages} pages</Text>
                                    </View>
                                </View>
                                <Button
                                    title='Description'
                                    onPress={toggleDescription}
                                    buttonStyle={bookDetailStyles.descriptionHeader}
                                    icon={isDescriptionExpanded ? faChevronUp : faChevronDown}
                                    textStyle={bookDetailStyles.sectionTitle}
                                />
                                <ScrollView
                                    style={[bookDetailStyles.descriptionScroll, {height: isDescriptionExpanded ? 150 : 80}]}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <Text style={bookDetailStyles.descriptionText}>{book.description}</Text>
                                </ScrollView>

                                <View style={bookDetailStyles.metadataContainer}>
                                    <Text style={bookDetailStyles.metadataTitle}>Publication</Text>
                                    <View style={bookDetailStyles.metadataColumn}>
                                        <View style={bookDetailStyles.infoRow}>
                                            <FontAwesomeIcon icon={faCalendar} color={currentTheme.textColor}/>
                                            <Text style={bookDetailStyles.infoText}>
                                                {new Date(book.publishedDate).toLocaleDateString()}
                                            </Text>
                                        </View>
                                        <Text style={bookDetailStyles.infoText}>ISBN-10: {book.isbn10}</Text>
                                        <Text style={bookDetailStyles.infoText}>ISBN-13: {book.isbn13}</Text>
                                    </View>
                                    {book.createdAt && (
                                        <View>book.createdAt
                                            <Text style={bookDetailStyles.metadataTitle}>Tracking</Text>
                                            <View style={bookDetailStyles.metadataColumn}>
                                                <View style={bookDetailStyles.infoRow}>
                                                    <FontAwesomeIcon icon={faClock} color={currentTheme.textColor}/>
                                                    <Text style={bookDetailStyles.infoText}>
                                                        Added: {new Date(book.createdAt).toLocaleDateString()}
                                                    </Text>
                                                </View>
                                                <View style={bookDetailStyles.infoRow}>
                                                    <FontAwesomeIcon icon={faClock} color={currentTheme.textColor}/>
                                                    <Text style={bookDetailStyles.infoText}>
                                                        Updated: {new Date(book.updatedAt).toLocaleDateString()}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </ScrollView>

                            <View style={bookDetailStyles.footer}>
                                <Button
                                    title={`Add to ${!status ? 'Wishlist' : status}`}
                                    onPress={handleAddToWishlist}
                                    buttonStyle={bookDetailStyles.wishlistButton}
                                    textStyle={bookDetailStyles.wishlistButtonText}
                                />
                                <Button
                                    title='Close'
                                    onPress={onClose}
                                    buttonStyle={bookDetailStyles.closeButton}
                                    textStyle={bookDetailStyles.closeButtonText}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default BookDetail;
