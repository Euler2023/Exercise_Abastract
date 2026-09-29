---
title: "Exercise Rep136: The Character Table of A5"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - character-tables
  - alternating-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 12, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep136: The Character Table of A5

## Problem Statement

> [!question] Lang, Chapter XVIII, Exercise 12
> Observe that $A_5\approx SL_2(\mathbb F_4)\approx PSL_2(\mathbb F_5)$. As a result, verify that there are $5$ conjugacy classes, whose elements have orders $1,2,3,5,5$ respectively, and write down explicitly the character table for $A_5$ as was done in the text for $GL_2$.

All characters below are over $\mathbb C$, and $PSL_2(\mathbb F_5)=SL_2(\mathbb F_5)/\{\pm I\}$.

## Hints

> [!hint]- Hint 1: Use the projective line and the two tori
> The action of $SL_2(\mathbb F_4)$ on $\mathbb P^1(\mathbb F_4)$ has five points and trivial kernel. Its order is $60$. In the character table from Exercise Rep135, the split and nonsplit tori have orders $3$ and $5$, giving one class of order $3$ and two of order $5$.

> [!hint]- Hint 2: Evaluate the torus characters and verify the other isomorphism
> For a primitive fifth root $\xi$, use $-(\xi+\xi^{-1})=(1-\sqrt5)/2$ and $-(\xi^2+\xi^{-2})=(1+\sqrt5)/2$. For $PSL_2(\mathbb F_5)$, pass the $SL_2$ class table through the center. Its class sizes show it is simple; its five Sylow $2$-subgroups then give an embedding in $S_5$.

## Solution

> [!success]- Independent isomorphism proofs and the complete character table
> **The isomorphism $SL_2(\mathbb F_4)\cong A_5$.** Put $G_4=SL_2(\mathbb F_4)$. Its natural action on the one-dimensional subspaces of $\mathbb F_4^2$ gives a homomorphism to $S_5$, since there are $4+1=5$ such subspaces. A matrix fixing every line is scalar: the coordinate lines make it diagonal, and the line spanned by $(1,1)$ makes its two diagonal entries equal. A scalar $aI$ in $G_4$ has $a^2=1$. In characteristic two this forces $a=1$. The action is therefore faithful.
>
> The order calculation $\#SL_2(\mathbb F_q)=q(q^2-1)$ gives $\#G_4=60$. Its image has index two in $S_5$ and must be $A_5$. To justify uniqueness here, an index-two subgroup is the kernel of a nontrivial homomorphism $S_5\to\{\pm1\}$. All transpositions are conjugate and generate $S_5$, so such a homomorphism sends every transposition to $-1$ and is the sign homomorphism. This proves the claimed isomorphism.
>
> **The five classes.** Specialize the class calculation of [[06 - Representation Theory/Exercises/Exercise Rep135 - Character Tables of SL2 over Finite Fields|Exercise Rep135]] to $q=4$. There is the identity, one unipotent class of size $15$, one split regular class of size $20$, and two nonsplit regular classes of size $12$ each. A nonidentity unipotent has order two. The split torus has order three. The nonsplit norm-one torus has order five, and inversion partitions its four nonidentity elements into the two pairs $\{b,b^{-1}\}$ and $\{b^2,b^{-2}\}$. The class orders are therefore $1,2,3,5,5$.
>
> Under the isomorphism with $A_5$, the classes may be represented as follows:
>
> | Class | Representative | Order | Size |
> |---|---|---:|---:|
> | $1A$ | $1$ | $1$ | $1$ |
> | $2A$ | $(12)(34)$ | $2$ | $15$ |
> | $3A$ | $(123)$ | $3$ | $20$ |
> | $5A$ | $g=(12345)$ | $5$ | $12$ |
> | $5B$ | $g^2=(13524)$ | $5$ | $12$ |
>
> For a direct check of the split five-cycle classes, the centralizer of $g$ in $S_5$ is $\langle g\rangle$, and it lies in $A_5$. Its $A_5$-class thus has size $60/5=12$. A permutation conjugating $g$ to $g^2$ acts, after labeling the cycle positions by $\mathbb Z/5\mathbb Z$, as $j\mapsto2j$ up to a translation. The multiplication-by-two permutation is a four-cycle on the four nonzero positions and is odd; translations are powers of $g$ and are even. Hence no such conjugator lies in $A_5$. The two displayed five-cycle representatives are in different classes. Inversion, in contrast, is induced by $j\mapsto-j$, a product of two transpositions, so $g$ and $g^{-1}$ lie in the same class.
>
> **The isomorphism $PSL_2(\mathbb F_5)\cong A_5$.** Set $J=SL_2(\mathbb F_5)/\{\pm I\}$, of order $60$. The classes from Exercise Rep135 descend as follows. The two central classes give the identity. The four repeated-root classes, each of size $12$, are paired by multiplication by $-I$ and give two quotient classes of size $12$, both of order five. The only split regular class has eigenvalues $2,3=2^{-1}$ and size $30$; it is fixed by negation because $-2=3$. It therefore gives a quotient class of size $15$, of order two since $\operatorname{diag}(2,3)^2=-I$.
>
> The nonsplit torus in $SL_2(\mathbb F_5)$ has order six. Its two regular classes, represented by a generator and its square, each have size $20$ and are interchanged by negation. They give one quotient class of size $20$, of order three. To see that this accounts for conjugacy in the quotient, two images are conjugate exactly when lifts are conjugate after possibly multiplying one lift by $-I$. Thus the quotient class sizes and orders are exactly those just listed.
>
> A normal subgroup of $J$ is a union of conjugacy classes containing the identity. The possible proper nonidentity unions have sizes among
>
> $$
> 13,16,21,25,28,33,36,40,45,48.
> $$
>
> None divides $60$. Lagrange's theorem therefore shows that $J$ is simple. Its Sylow $2$-subgroups have order four. There are no elements of order four in the class list, so every such subgroup is a Klein four group. Each involution has centralizer of order $60/15=4$. Any Sylow $2$-subgroup containing it is abelian and hence lies in that centralizer; it must equal the centralizer. Consequently each of the $15$ involutions lies in exactly one Sylow $2$-subgroup, and there are $15/3=5$ such subgroups.
>
> Conjugation on these five subgroups gives $J\to S_5$. This action is nontrivial: otherwise each of the five subgroups would be normal, contradicting simplicity. Its kernel is normal, so simplicity makes the action faithful. The image has order $60$ and index two, hence is $A_5$ by the index-two argument above. This proves the second isomorphism without importing a classification of simple groups of order $60$.
>
> **The character table.** Put
>
> $$
> \phi=\frac{1+\sqrt5}{2},\qquad
> \phi'=\frac{1-\sqrt5}{2}.
> $$
>
> The complete complex character table is
>
> | Character | $1A$ | $2A$ | $3A$ | $5A$ | $5B$ |
> |---|---:|---:|---:|---|---|
> | $\chi_1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
> | $\chi_3$ | $3$ | $-1$ | $0$ | $\phi$ | $\phi'$ |
> | $\chi_3'$ | $3$ | $-1$ | $0$ | $\phi'$ | $\phi$ |
> | $\chi_4$ | $4$ | $0$ | $1$ | $-1$ | $-1$ |
> | $\chi_5$ | $5$ | $1$ | $-1$ | $0$ | $0$ |
>
> Here is a derivation of every row. At $q=4$, the Steinberg character in Exercise Rep135 has degree four and gives $\chi_4$. The two nontrivial characters of $\mathbb F_4^\times$, a cyclic group of order three, are inverse to each other and give one principal character of degree five. At a nonidentity split element their sum is $-1$, giving the row $\chi_5$.
>
> The norm-one torus has order five. Choose its generator $b$ and a character $\beta$ with $\beta(b)=\xi=e^{2\pi i/5}$. Its nontrivial characters have two inverse pairs, represented by $\beta$ and $\beta^2$. The corresponding cuspidal characters have degree three and, at $c_b,c_{b^2}$, values
>
> $$
> -\xi-\xi^{-1},\qquad -\xi^2-\xi^{-2}
> $$
>
> in opposite orders. Writing $r=\xi+\xi^{-1}$, the identity $1+\xi+\xi^2+\xi^3+\xi^4=0$ gives $r^2+r-1=0$. Since $r=2\cos(2\pi/5)>0$, we get $-r=\phi'$ and $-(r^2-2)=\phi$. These are exactly $\chi_3$ and $\chi_3'$, after choosing the labels of the two degree-three rows. Their values at the unipotent and split classes are $-1$ and $0$ by the same cuspidal formula.
>
> The five rows are thus actual irreducible characters by Exercise Rep135. They exhaust the five conjugacy classes, and their degrees satisfy
>
> $$
> 1^2+3^2+3^2+4^2+5^2=60.
> $$
>
> One can also recover the table from $q=5$. The $SL_2(\mathbb F_5)$ characters on which $-I$ acts trivially are exactly the trivial character, the degree-five Steinberg character, one degree-four cuspidal character, and the two degree-three exceptional principal characters. These descend to $J$. Since $\delta=1$ in that case, the exceptional values at the two unipotent quotient classes are $(1\pm\sqrt5)/2$, confirming the displayed five-cycle entries.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Source and proof status:** [S2, Ch. XVIII, Ex. 12, printed p. 725, PDF p. 740] was checked on the original page image. The two isomorphism proofs, conjugacy calculations, and specialization to the displayed table are independent derivations. The general $SL_2$ character formulas used here are proved in Exercise Rep135, with its separately identified $GL_2$ source inputs.
- **Class labels:** Interchanging $5A$ and $5B$ interchanges the two degree-three rows. The chosen representatives fix the class names; the two characters have no intrinsic ordering. Both five-cycle classes contain inverses, consistently with the table's real values.
- **Proof inputs:** Besides the proved character table in Exercise Rep135, the group-theoretic inputs are Lagrange's theorem, Sylow's theorem, and the classification of groups of order four. The simplicity of $PSL_2(\mathbb F_5)$ is proved from its class sizes rather than assumed.
