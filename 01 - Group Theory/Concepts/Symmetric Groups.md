---
title: Symmetric Groups
aliases:
  - Symmetric Group
  - Permutation Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - symmetric-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, §1.5, and Ch. 2, §2.2, printed pp. 24–27 and 40–43, PDF pp. 36–39 and 52–55"
source_status: partially-verified
status: not-started
---

# Symmetric Groups

## Definition

> [!info] Definition (Symmetric Group)
> Let $X$ be a set. A **permutation** of $X$ is a bijection $X\to X$. The set of all permutations of $X$, with function composition as its operation, is the **symmetric group** on $X$, denoted by $\operatorname{Sym}(X)$.

For the finite set $\{1,2,\ldots,n\}$, the symmetric group is denoted by
$$
S_n=\operatorname{Sym}(\{1,2,\ldots,n\}).
$$
It has
$$
|S_n|=n!
$$
elements, because a permutation is determined by successively choosing the images of $1,2,\ldots,n$.

## Group Structure

The group operation is composition of functions. Throughout this note, products act from right to left:
$$
(\sigma\tau)(x)=\sigma(\tau(x)).
$$

- The identity is the identity permutation $e(x)=x$.
- The inverse $\sigma^{-1}$ reverses the bijection $\sigma$.
- Associativity follows from associativity of function composition.

Thus the group structure is obtained as the group of units of the transformation monoid $\operatorname{End}(X)$; see [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]].

## Cycle Notation

The cycle
$$
(a_1\ a_2\ \cdots\ a_k)
$$
sends $a_1$ to $a_2$, $a_2$ to $a_3$, and so on, with $a_k$ sent back to $a_1$. Every element outside the displayed cycle is fixed.

Disjoint cycles commute because they move disjoint subsets. Every permutation of a finite set can be written as a product of disjoint cycles by following the orbit of each element until it returns to its starting point.

> [!abstract] Proposition (Disjoint-Cycle Decomposition)
> Every permutation in $S_n$ is a product of pairwise disjoint cycles.
>
> **Proof.** Let $\sigma\in S_n$ and choose an element $x$. Since the underlying set is finite, two terms in
> $$
> x,\sigma(x),\sigma^2(x),\ldots
> $$
> must agree. Because $\sigma$ is bijective, the first repeated value closes the orbit at $x$: for some least $k>0$,
> $$
> \sigma^k(x)=x.
> $$
> Hence $\sigma$ acts on this orbit as the cycle
> $$
> (x\ \sigma(x)\ \cdots\ \sigma^{k-1}(x)).
> $$
> If elements remain outside this orbit, repeat the construction with one of them. Distinct orbits are disjoint, and finiteness ensures that the process terminates. The resulting disjoint cycles agree with $\sigma$ on every element. $\square$

The inverse of a cycle reverses its direction:
$$
(a_1\ a_2\ \cdots\ a_k)^{-1}=(a_1\ a_k\ a_{k-1}\ \cdots\ a_2).
$$

> [!info] Definition (Transposition)
> A cycle of length $2$, written $(ab)$, is called a **transposition**. It exchanges $a$ and $b$ and fixes every other element.

> [!abstract] Proposition (Generation by Transpositions)
> Every element of $S_n$ is a product of transpositions.
>
> **Proof.** By the disjoint-cycle decomposition, it suffices to treat one cycle. For a $k$-cycle,
> $$
> (a_1\ a_2\ \cdots\ a_k)
> =(a_1a_k)(a_1a_{k-1})\cdots(a_1a_2).
> $$
> Apply the rightmost factor first: $a_1$ moves to $a_2$; each $a_i$ for $2\le i<k$ first moves to $a_1$ under $(a_1a_i)$ and then to $a_{i+1}$ under the next factor; and $a_k$ moves to $a_1$. Thus the product on the right has exactly the action of the cycle on the left. Applying this formula to every disjoint cycle proves the claim. $\square$

## Permutation Matrices

Permutation matrices turn the movement of labels into a linear transformation: the label $j$ is represented by the standard basis vector $e_j$, and moving $j$ to $\sigma(j)$ means sending $e_j$ to $e_{\sigma(j)}$.

> [!info] Definition (Permutation Matrix)
> Let $n\ge1$, let $F$ be a field, and let $e_1,\ldots,e_n$ be the standard basis of $F^n$. For $\sigma\in S_n$, its **permutation matrix** $P_\sigma$ is the $n\times n$ matrix defined by
> $$
> P_\sigma e_j=e_{\sigma(j)}\qquad(1\le j\le n).
> $$
> Equivalently, column $j$ is $e_{\sigma(j)}$, so
> $$
> (P_\sigma)_{ij}=
> \begin{cases}
> 1,&i=\sigma(j),\\
> 0,&i\ne\sigma(j).
> \end{cases}
> $$
> Thus a permutation matrix has exactly one $1$ in each row and each column, with every other entry $0$.

Conversely, any matrix with this pattern determines a unique permutation: define $\sigma(j)$ to be the row containing the $1$ in column $j$. The condition on rows makes these values distinct, so $\sigma$ is bijective. In matrix-unit notation,
$$
P_\sigma=\sum_{j=1}^n E_{\sigma(j),j},
$$
where $E_{ij}$ has a single $1$ in position $(i,j)$ and zeros elsewhere. Here $E_{ij}$ denotes a matrix, whereas $e_j$ denotes a column vector.

### Action on Coordinates

For $x=\sum_j x_j e_j$, linearity gives
$$
P_\sigma x=\sum_{j=1}^n x_j e_{\sigma(j)}
=\sum_{i=1}^n x_{\sigma^{-1}(i)}e_i.
$$
The second expression reindexes the sum by $i=\sigma(j)$. Therefore
$$
(P_\sigma x)_i=x_{\sigma^{-1}(i)}.
$$

> [!tip] Positions and coordinate indices
> The entry originally in position $j$ moves to position $\sigma(j)$. To find the entry now in position $i$, look back to its original position $\sigma^{-1}(i)$. This explains the inverse in the coordinate formula.

> [!example] The Three-Cycle $(123)$
> Since $1\mapsto2$, $2\mapsto3$, and $3\mapsto1$, the columns are $e_2,e_3,e_1$:
> $$
> P_{(123)}=
> \begin{pmatrix}
> 0&0&1\\
> 1&0&0\\
> 0&1&0
> \end{pmatrix},
> \qquad
> P_{(123)}
> \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
> =\begin{pmatrix}x_3\\x_1\\x_2\end{pmatrix}.
> $$
> In particular, the first entry moves to the second position. Reading the output as $(x_2,x_3,x_1)^{\mathsf T}$ instead would describe the inverse cycle $(132)$.

### Composition, Inverses, and Transposes

> [!abstract] Proposition (The Matrix Model of $S_n$)
> With the right-to-left composition convention of this note,
> $$
> P_\sigma P_\tau=P_{\sigma\tau},\qquad
> P_e=I_n,\qquad
> P_{\sigma^{-1}}=P_\sigma^{-1}=P_\sigma^{\mathsf T}.
> $$
>
> **Proof.** For each standard basis vector,
> $$
> P_\sigma P_\tau e_j
> =P_\sigma e_{\tau(j)}
> =e_{\sigma(\tau(j))}
> =P_{\sigma\tau}e_j.
> $$
> Matrices agreeing on all basis vectors are equal. The identity permutation fixes every $e_j$, so $P_e=I_n$. Applying the product formula to $\sigma\sigma^{-1}$ and $\sigma^{-1}\sigma$ shows that $P_{\sigma^{-1}}$ is the inverse of $P_\sigma$.
>
> Transposing the $1$ in position $(\sigma(j),j)$ puts it in position $(j,\sigma(j))$. Writing $k=\sigma(j)$ makes this position $(\sigma^{-1}(k),k)$, exactly the defining pattern of $P_{\sigma^{-1}}$. Hence $P_\sigma^{\mathsf T}=P_{\sigma^{-1}}$. $\square$

Consequently, $\sigma\mapsto P_\sigma$ is an injective [[01 - Group Theory/Concepts/Group Homomorphisms|group homomorphism]] $S_n\to GL_n(F)$. It is injective because the columns recover every value $\sigma(j)$. Its image is precisely the subgroup of permutation matrices, giving a concrete matrix realization of $S_n$. Over $\mathbb R$, the identity $P_\sigma^{\mathsf T}P_\sigma=I_n$ also says that these matrices are orthogonal.

Left and right multiplication reorder rows and columns differently. If $A$ is $n\times m$ and $B$ is $m\times n$, then
$$
(P_\sigma A)_{ik}=A_{\sigma^{-1}(i),k},\qquad
(BP_\sigma)_{kj}=B_{k,\sigma(j)}.
$$
Thus left multiplication moves original row $j$ to row $\sigma(j)$, whereas column $j$ of $BP_\sigma$ is column $\sigma(j)$ of $B$. In particular, when $\sigma=(ab)$, left multiplication swaps rows $a,b$ and right multiplication swaps columns $a,b$.

### Determinant and Sign

Regard $P_\sigma$ as a matrix over $\mathbb R$ when defining the sign of a permutation.

> [!info] Definition (Sign, Even and Odd Permutations)
> The **sign** of $\sigma$ is
> $$
> \operatorname{sgn}(\sigma)=\det(P_\sigma)\in\{1,-1\}.
> $$
> A permutation is **even** if its sign is $1$ and **odd** if its sign is $-1$.

Here we use the multiplicativity of [[04 - Linear Algebra and Modules/Concepts/Determinants|determinants]] and the fact that swapping two columns reverses the determinant's sign. A transposition matrix is obtained from $I_n$ by swapping two columns, so its determinant is $-1$. Since every permutation is a product of transpositions, say $\sigma=\tau_1\cdots\tau_r$, the matrix product formula gives
$$
\det(P_\sigma)=\prod_{j=1}^r\det(P_{\tau_j})=(-1)^r.
$$
This proves that the determinant is always $\pm1$ and that the parity of the number of transpositions is independent of the chosen factorization. Moreover,
$$
\operatorname{sgn}(\sigma\tau)=\operatorname{sgn}(\sigma)\operatorname{sgn}(\tau).
$$
A $k$-cycle is a product of $k-1$ transpositions, so its sign is $(-1)^{k-1}$; in particular, $(123)$ is even. Over any field $F$, the determinant of the same $0$–$1$ matrix is the image of this integer sign in $F$. If $\operatorname{char}(F)=2$, then $1=-1$ in $F$, so that determinant cannot distinguish even from odd permutations.

The matrix construction and transpose formula are used in [[01 - Group Theory/Exercises/Exercise G29 - Permutation Matrix of a Four Cycle|Exercise G29]] and [[01 - Group Theory/Exercises/Exercise G30 - Inverse of a Permutation Matrix|Exercise G30]].

## The Group $S_3$

The six elements of $S_3$ are
$$
e,\quad (123),\quad (132),\quad (12),\quad (13),\quad (23).
$$
Let
$$
r=(123),\qquad s=(12).
$$
Then
$$
S_3=\{e,r,r^2,s,sr,sr^2\}
$$
and the defining relations include
$$
r^3=e,\qquad s^2=e,\qquad srs=r^{-1}.
$$
These relations provide a compact way to calculate the complete multiplication table in [[01 - Group Theory/Exercises/Exercise G10 - Multiplication Table of S3|Exercise G10]].

> [!abstract] Proposition
> The symmetric group $S_n$ is non-abelian for every $n\ge3$.
>
> **Proof.** In $S_n$, consider the transpositions $(12)$ and $(23)$. With right-to-left composition,
> $$
> (12)(23)=(123),
> $$
> whereas
> $$
> (23)(12)=(132).
> $$
> These products are different, so $(12)$ and $(23)$ do not commute. Hence $S_n$ is non-abelian for $n\ge3$. $\square$

## Key Properties

1. $S_n$ consists of all bijections of an $n$-element set and has order $n!$.
2. Multiplication is function composition and is generally noncommutative.
3. Every finite permutation has a disjoint-cycle decomposition.
4. Every permutation is a product of transpositions.
5. The inverse of a cycle is obtained by reversing its direction.
6. Permutation matrices realize $S_n$ as a subgroup of $GL_n(F)$, with $P_\sigma P_\tau=P_{\sigma\tau}$ and $P_\sigma^{-1}=P_\sigma^{\mathsf T}$.
7. Over $\mathbb R$, $\det(P_\sigma)=\operatorname{sgn}(\sigma)$, and a $k$-cycle has sign $(-1)^{k-1}$.

## Examples

> [!example] Example 1: Inverting a Cycle
> Since $(123)$ sends $1\mapsto2\mapsto3\mapsto1$, its inverse follows the arrows backward:
> $$
> (123)^{-1}=(132).
> $$

> [!example] Example 2: Solving a Permutation Equation
> An equation such as $xyz=e$ can be solved by multiplying by inverses in the correct order. Cyclic rearrangement gives $yzx=e$, but reversing the factors need not preserve the equation; see [[01 - Group Theory/Exercises/Exercise G12 - Solving Group Equations|Exercise G12]].

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

The entry point and $S_3$ exercise follow [S1, Ch. 2, Section 2, especially Ex. 2.1]. The counting argument, cycle identities, and noncommutativity proposition are proved or explicitly verified in this note; no classification theorem is used.

The permutation-matrix convention, the $(123)$ example, the coordinate reindexing, and the definition of sign were checked against rendered pages of [S1, Michael Artin, *Algebra*, 2nd ed., Ch. 1, §1.5, (1.5.6)–(1.5.11), printed pp. 26–27, PDF pp. 38–39]. Artin proves Proposition 1.5.10(c), the product formula, using matrix units, but explicitly omits the verification of (a), the row/column characterization, and (b), the determinant being $\pm1$.

The basis-vector proof of the product formula, the converse characterization, the inverse/transpose proof, the row/column formulas, and the characteristic-$2$ clarification above are independent derivations for this vault. The determinant argument imports determinant multiplicativity and the column-swap rule from the linked prerequisite; these determinant properties are not reproved here. This local source check does not constitute a fresh audit of every earlier section, so `source_status` remains `partially-verified` and the learning status remains unchanged.
