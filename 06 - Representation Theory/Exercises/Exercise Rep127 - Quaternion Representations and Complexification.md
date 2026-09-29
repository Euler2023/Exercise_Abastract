---
title: "Exercise Rep127: Quaternion Representations and Complexification"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 3, printed p. 723, PDF p. 738"
created: 2026-09-29
---

# Exercise Rep127: Quaternion Representations and Complexification

## Problem Statement

> [!question] Lang XVIII.3 — The quaternion group
> Let $Q=\{\pm1,\pm x,\pm y,\pm z\}$ be the quaternion group, with $x^2=y^2=z^2=-1$ and $xy=-yx$, $xz=-zx$, $yz=-zy$.
>
> (a) Show that $Q$ has $5$ conjugacy classes.
>
> Let $A=\{\pm1\}$. Then $Q/A$ is of type $(2,2)$, and hence has $4$ simple characters, which can be viewed as simple characters of $Q$.
>
> (b) Show that there is only one more simple character of $Q$, of dimension $2$. Show that the corresponding representation can be given by a matrix representation such that
>
> $$
> \rho(x)=\begin{pmatrix}i&0\\0&-i\end{pmatrix},\qquad
> \rho(y)=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad
> \rho(z)=\begin{pmatrix}0&i\\i&0\end{pmatrix}.
> $$
>
> (c) Let $\mathbb H$ be the quaternion field, i.e. the algebra over $\mathbb R$ having dimension $4$, with basis $\{1,x,y,z\}$ as in Exercise 3, and the corresponding relations as above. Show that $\mathbb C\otimes_{\mathbb R}\mathbb H\simeq\operatorname{Mat}_2(\mathbb C)$ ($2\times2$ complex matrices). Relate this to (b).

## Hints

> [!hint]- Hint 1: Separate the central and noncentral elements
> The classes of $1$ and $-1$ are singletons. Conjugation by a different quaternion unit reverses the sign of a noncentral unit. Use the number of classes and the sum of squared irreducible degrees.

> [!hint]- Hint 2: Extend the matrices linearly
> Check that the three displayed matrices satisfy quaternion multiplication. Show that $I,\rho(x),\rho(y),\rho(z)$ are linearly independent over $\mathbb C$.

## Solution

> [!success]- Independent derivation
> We use the usual quaternion orientation $xy=z$; then $yx=-z$, $yz=x$, and $zx=y$. The displayed matrices use this orientation.
>
> **(a).** Both $1$ and $-1$ are central. For instance $yxy^{-1}=-x$. Conjugation preserves the cyclic subgroup $\{1,-1,x,-x\}$: conjugation by $x$ fixes $x$, and conjugation by $y$ sends $x$ to $-x$; these two elements generate $Q$. Consequently the class of $x$ is exactly $\{x,-x\}$. The other two cases are identical. The five classes are
>
> $$
> \{1\},\quad\{-1\},\quad\{x,-x\},\quad\{y,-y\},\quad\{z,-z\}.
> $$
>
> The quotient $Q/A$ has order $4$ and its three nonidentity elements have order $2$, so it is $C_2\times C_2$. Its four complex characters are obtained by independently assigning $xA,yA$ the values $\pm1$. Inflating them to $Q$ gives four distinct irreducible characters of degree $1$.
>
> **(b).** The complex character theorem says that the number of irreducible characters equals the number of conjugacy classes, and that their squared degrees sum to $\lvert Q\rvert$. Thus exactly one character remains, of degree $d$ satisfying $4+d^2=8$, hence $d=2$.
>
> Write $X,Y,Z$ for the three displayed matrices. Direct multiplication gives
>
> $$
> X^2=Y^2=Z^2=-I,\qquad XY=Z=-YX,\qquad YZ=X=-ZY,\qquad ZX=Y=-XZ.
> $$
>
> Sending $1$ to $I$, $-1$ to $-I$, and the units to $X,Y,Z$ therefore defines a representation. An invariant line would be an eigenline of $X$. Since its eigenvalues $i,-i$ are distinct, the only possibilities are the two coordinate lines, but $Y$ interchanges them. There is no invariant line, so this two-dimensional representation is irreducible. Its values on the five classes are $2,-2,0,0,0$.
>
> **(c).** The same multiplication check defines an $\mathbb R$-algebra homomorphism $\mathbb H\to\operatorname{Mat}_2(\mathbb C)$ and therefore a $\mathbb C$-algebra homomorphism
>
> $$
> \Phi:\mathbb C\otimes_{\mathbb R}\mathbb H\longrightarrow\operatorname{Mat}_2(\mathbb C),
> \qquad c\otimes q\longmapsto c\rho(q).
> $$
>
> For $a,b,c,d\in\mathbb C$,
>
> $$
> aI+bX+cY+dZ=
> \begin{pmatrix}a+bi&c+di\\-c+di&a-bi\end{pmatrix}.
> $$
>
> If this matrix is zero, adding and subtracting its diagonal entries gives $a=b=0$, and doing the same with the off-diagonal entries gives $c=d=0$. Thus the images of the complex basis $1\otimes1,1\otimes x,1\otimes y,1\otimes z$ are independent. Both algebras have complex dimension $4$, so $\Phi$ is an isomorphism. Restricting its natural action on $\mathbb C^2$ to the eight quaternion units recovers precisely the representation in (b).

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group algebra]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation theory]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor product]]

## Notes

- Source checked directly against the original PDF: [S2, Ch. XVIII, Exercise 3, printed p. 723, PDF p. 738]. The printed phrase “as in Exercise 3” is retained; it refers back within this exercise.
- The source's word “field” for $\mathbb H$ means a noncommutative division algebra. The tensor product in (c) is an algebra tensor product, and the asserted isomorphism is an algebra isomorphism.
- The orientation $xy=z$ is the usual convention implicit in the printed matrices; replacing $z$ by $-z$ would change its displayed matrix.
- Proof status: independent derivation. Imported character inputs are the regular multiplicity formula and the class-function basis theorem [S2, Ch. XVIII, Corollary 5.13 and Theorem 5.15, printed pp. 683–684, PDF pp. 698–699].
