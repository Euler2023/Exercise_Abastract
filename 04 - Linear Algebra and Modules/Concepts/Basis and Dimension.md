---
title: Basis and Dimension
aliases:
  - Standard Basis
  - Standard Coordinate Basis
  - Standard Matrix Basis
  - Monomial Basis
  - Ordered Basis
  - Dual Basis
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, §§3.4–3.5, printed pp. 86–95, PDF pp. 98–107"
source_status: partially-verified
status: not-started
---

# Basis and Dimension

## Definition

> [!info] Definition (Basis)
> Let $V$ be a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] over a field $F$. A **basis** for $V$ is a set $\mathcal B$ of vectors that is:
> 1. [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linearly independent]]
> 2. Spans $V$ (every vector in $V$ is a **finite** linear combination of basis vectors).
>
> The set may be finite or infinite. This algebraic notion is also called a **Hamel basis**; an infinite basis does not authorize infinite sums. The empty set is a basis of the zero vector space.

Artin's finite basis definition and empty-basis convention appear at [S1, Ch. 3, Definition 3.4.13, printed p. 88, PDF p. 100; (3.4.17), printed p. 90, PDF p. 102]. The formulation for arbitrary sets above is an explicitly stated algebraic extension.

> [!info] Definition (Dimension)
> The **dimension** of a vector space $V$ over $F$, denoted $\dim_F V$ or $\dim V$, is the cardinality of a basis. A space is **finite-dimensional** if it has a finite spanning set; in this case its bases have a finite common size $n$. Otherwise it is **infinite-dimensional**.

## Key Properties

1. **Uniqueness of representation**: Every vector has a unique finite linear combination of basis vectors. Existence follows from spanning. Subtracting two expressions gives a finite linear relation, so independence forces every difference of coefficients to be zero [S1, Proposition 3.4.14, printed p. 88, PDF p. 100].
2. **Basis size invariance**: In a finite-dimensional space, any two bases have the same size [S1, Theorem 3.4.18 and Proposition 3.4.21, printed pp. 90–91, PDF pp. 102–103].
3. **Existence**: A finite spanning set can be reduced to a basis [S1, Proposition 3.4.16(b), printed p. 89, PDF p. 101].
4. **Extension**: In a finite-dimensional space, an independent set can be extended to a basis by adding vectors from a finite spanning set [S1, Proposition 3.4.16(a), printed p. 89, PDF p. 101].
5. **Reduction**: In a finite-dimensional space, a spanning set contains a basis: select a finite spanning subset and then use property 3. A finite subset suffices because each vector of an already chosen finite basis uses only finitely many of the given spanning vectors.

If $n$ vectors span $V$, an independent set cannot contain $n+1$ vectors: those finitely many vectors would contradict Theorem 3.4.18. Thus every basis of a finite-dimensional space is finite, including a basis initially described without a size bound.

For arbitrary vector spaces, existence, extension, reduction, and basis-cardinality invariance are external algebraic basis results in the usual Axiom of Choice setting. The existence and extension results follow from Zorn's lemma; these infinite-dimensional results are not proved in this note or attributed to the checked Artin slice.

## Important Results

> [!abstract] Theorem (Dimension of Subspaces)
> If $W$ is a [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] of finite-dimensional $V$, then:
> 1. $\dim W \leq \dim V$
> 2. $\dim W = \dim V$ implies $W = V$
>
> Statement and proof: [S1, Proposition 3.4.23, printed p. 91, PDF p. 103].

## Ordered Bases and Coordinates

> [!info] Definition (Ordered Basis and Coordinate Vector)
> An **ordered basis** is a tuple $\mathcal B=(b_1,\ldots,b_n)$ listing each vector of a finite basis exactly once. The order assigns positions to the unique coefficients:
> $$
> v=\sum_{i=1}^n x_i b_i,
> \qquad
> [v]_{\mathcal B}=\begin{pmatrix}x_1\\\vdots\\x_n\end{pmatrix}\in F^n.
> $$
> The scalars $x_i$ are the **coordinates** of $v$ relative to $\mathcal B$, and $[v]_{\mathcal B}$ is its **coordinate vector**. Reordering a basis preserves the basis property but changes the positions of the coordinates.

For example, if $v=2b_1+3b_2$, then $[v]_{(b_1,b_2)}=(2,3)^T$, whereas $[v]_{(b_2,b_1)}=(3,2)^T$. This example assumes $b_1,b_2$ are a basis of $V$; it is an independent illustration of the convention.

> [!abstract] Theorem (Coordinate Isomorphism)
> For an ordered basis $\mathcal B$ of a finite-dimensional space $V$, the maps
> $$
> \phi_{\mathcal B}:V\longrightarrow F^n,\quad v\longmapsto[v]_{\mathcal B},
> \qquad
> \psi_{\mathcal B}:F^n\longrightarrow V,\quad(x_i)\longmapsto\sum_i x_i b_i
> $$
> are inverse linear isomorphisms.

**Independent verification.** Addition and scalar multiplication of the sums show that $\psi_{\mathcal B}$ is linear. Spanning makes it surjective, and independence makes its kernel zero. The unique-expansion property gives $\phi_{\mathcal B}\psi_{\mathcal B}=\operatorname{id}_{F^n}$ and $\psi_{\mathcal B}\phi_{\mathcal B}=\operatorname{id}_V$; hence the coordinate map is linear as well.

The ordered-set convention is explicit at [S1, Ch. 3, §3.4, printed p. 86, PDF p. 98]. Coordinates and the inverse isomorphisms are described at [S1, (3.5.1)–(3.5.3), Proposition 3.5.4 and Corollary 3.5.5, printed pp. 91–92, PDF pp. 103–104]. Change-of-basis direction is fixed in [[04 - Linear Algebra and Modules/Concepts/Matrix Representation#Change of Basis|Matrix Representation: Change of Basis]].

## Standard Coordinate Basis

> [!info] Definition (Standard Basis of $F^n$)
> In the space $F^n$ of column vectors, the **standard coordinate basis** is the ordered basis $\mathcal E_n=(e_1,\ldots,e_n)$, where $e_i$ has $1$ in position $i$ and $0$ elsewhere:
> $$
> (e_i)_k=\delta_{ki},
> \qquad
> \delta_{ki}=\begin{cases}1&k=i,\\0&k\ne i.\end{cases}
> $$
> The symbol $\delta_{ki}$ is the **Kronecker delta**; it records equality of the indices.

The coordinates of $x=(x_1,\ldots,x_n)^T$ give

$$
x=\sum_{i=1}^n x_i e_i,
\qquad
[x]_{\mathcal E_n}=x.
$$

This proves spanning. If $\sum_i a_i e_i=0$, its $k$th entry is $a_k=0$ for every $k$, proving independence. Artin gives the vectors and their standard-basis interpretation at [S1, Ch. 3, §3.4, printed pp. 88–89, PDF pp. 100–101]; the entrywise proof here is an independent verification.

## Standard Monomial Basis

> [!info] Definition (Monomial Basis)
> For an integer $d\ge0$, define the polynomial space
> $$
> F[t]_{\le d}=\left\{\sum_{r=0}^d a_r t^r:a_r\in F\right\}.
> $$
> Its **standard monomial basis** is $(1,t,t^2,\ldots,t^d)$. The full polynomial space $F[t]$ has the infinite algebraic basis $\{t^r:r\ge0\}$.

**Independent verification.** A polynomial is, by definition, a finite sum of powers of the specified indeterminate $t$ with coefficients in $F$, so these powers span. Equality of formal polynomials means equality of every coefficient, so a zero linear combination has all coefficients zero. Thus $\dim F[t]_{\le d}=d+1$, whereas $\dim F[t]=\aleph_0$. The notation $P_d(t)$ is also used for $F[t]_{\le d}$; it includes the zero polynomial. These statements concern formal polynomials, even when $F$ is finite.

## Standard Matrix Basis

> [!info] Definition (Standard Basis of a Matrix Space)
> In $M_{m\times n}(F)$, let $E_{ij}$ be the **matrix unit** with a single $1$ at row $i$, column $j$, and zeros elsewhere, for $1\le i\le m$ and $1\le j\le n$. The $mn$ matrices $E_{ij}$ form the **standard matrix basis**. To make it ordered, use the explicitly specified row-major order
> $$
> (E_{11},\ldots,E_{1n},E_{21},\ldots,E_{2n},\ldots,E_{m1},\ldots,E_{mn}).
> $$

For $A=(a_{ij})$, the expansion

$$
A=\sum_{i=1}^m\sum_{j=1}^n a_{ij}E_{ij}
$$

is unique by comparing each entry. This proves both spanning and independence, and gives $\dim M_{m\times n}(F)=mn$. This argument is an independent derivation. See [[04 - Linear Algebra and Modules/Concepts/Matrix Representation#Matrix Units|Matrix Units]] for the entry formula, examples, and multiplication law; the products $E_{ij}E_{k\ell}$ are matrix operations, whereas the basis assertion uses vector addition and scalar multiplication.

## Standard Bases at a Glance

| Space | Standard Basis | Dimension |
|-------|----------------|-----------|
| $F^n$ | $(e_1,\ldots,e_n)$ | $n$ |
| $F[t]_{\le d}$ | $(1,t,\ldots,t^d)$ | $d+1$ |
| $M_{m\times n}(F)$ | $E_{ij}$ in the specified order above | $mn$ |
| $F[t]$ | $\{t^r:r\ge0\}$ | $\aleph_0$ |

**Meaning of “standard.”** These bases are attached to specified coordinate, polynomial, or matrix models. An abstract vector space $V$ has no designated standard basis unless a concrete model or extra data supplies one. For finite-dimensional $V$, choosing a basis gives an isomorphism $V\cong F^n$; the bare existence of that isomorphism does not select a basis of $V$.

## Dual Basis

> [!info] Definition (Dual Space and Dual Basis)
> The **algebraic dual space** is $V^*=\operatorname{Hom}_F(V,F)$, the vector space of linear functions from $V$ to $F$. For a finite ordered basis $\mathcal B=(b_1,\ldots,b_n)$, its **dual basis** is $(b^1,\ldots,b^n)$ in $V^*$, defined by
> $$
> b^i\left(\sum_{j=1}^n x_jb_j\right)=x_i,
> \qquad
> b^i(b_j)=\delta_{ij}.
> $$
> Each $b^i$ extracts one coordinate; it is a linear functional, not a vector of $V$.

**Independent derivation.** Unique coordinates make each $b^i$ well-defined, and the coordinate isomorphism proves linearity. Every $f\in V^*$ satisfies

$$
f=\sum_{i=1}^n f(b_i)b^i,
$$

because both sides take the value $\sum_i x_i f(b_i)$ at $v=\sum_i x_i b_i$. Evaluating a relation $\sum_i c_i b^i=0$ at $b_j$ gives $c_j=0$, so the $b^i$ are independent. They therefore form a basis, with $\dim V^*=n$. For $F^n$, the standard dual basis consists of the coordinate functions $e^i(x)=x_i$.

This differs from a **$B$-dual basis** of vectors in $V$ associated with a nondegenerate bilinear form $B$. Such vectors $b_i'$ obey $B(b_j,b_i')=\delta_{ji}$: the linear map $w\mapsto B(-,w)$ sends $b_i'$ to the functional $b^i$. Nondegeneracy makes this map injective, and $\dim V=\dim V^*$ makes it an isomorphism, so the $b_i'$ exist uniquely and form a basis. The identification of $V$ with $V^*$ therefore requires the specified form. See [[04 - Linear Algebra and Modules/Concepts/Casimir Tensors and Invariant Elements#Definition|Casimir Tensors and Invariant Elements]].

## Other Common Bases

- In a real or complex inner product space, an **orthogonal basis** has mutually orthogonal distinct basis vectors. An **orthonormal basis** additionally has each vector of norm $1$: see [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces#Orthogonality|Orthogonality and Orthonormal Bases]]. These definitions require a specified inner product.
- For a linear operator $T:V\to V$, an **eigenvector basis** or **eigenbasis** consists entirely of eigenvectors of $T$: see [[04 - Linear Algebra and Modules/Concepts/Diagonalization#Definition|Diagonalization]]. Such a basis exists exactly when $T$ is diagonalizable over the specified field, and it depends on $T$.

These names specify additional properties of a basis. They do not by themselves mean the standard coordinate basis.

## Examples

> [!example] Example 1: $\mathbb{R}^3$
> The standard basis is $(e_1,e_2,e_3)$, with $e_1=(1,0,0)^T$, $e_2=(0,1,0)^T$, and $e_3=(0,0,1)^T$, so $\dim\mathbb R^3=3$.

> [!example] Example 2: Polynomials
> $P_2(x)$ has basis $\{1, x, x^2\}$, so $\dim P_2(x) = 3$.

> [!example] Example 3: Non-standard basis
> $\{(1,1), (1,-1)\}$ is also a basis for $\mathbb{R}^2$.
> Indeed, $a(1,1)+b(1,-1)=(a+b,a-b)$, whose unique solution for the vector $(x,y)$ is $a=(x+y)/2$, $b=(x-y)/2$. The ordered basis $((1,1)^T,(1,-1)^T)$ is orthogonal for the usual dot product, but it is not orthonormal because both vectors have norm $\sqrt2$.

> [!example] Example 4: Infinite-dimensional
> The space of all polynomials $P(x)$ has infinite dimension (basis $\{1, x, x^2, \ldots\}$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]] (generalization)
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]] (matrix units and coordinate changes)
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]] (orthogonal and orthonormal bases)
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]] (eigenvector bases)


## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The Artin source is S1, *Algebra*, Second Edition. The original page images for [Ch. 3, §§3.4–3.5, printed pp. 86–95, PDF pp. 98–107] were checked on 2026-10-01. The finite basis, ordered-set and coordinate conventions, standard coordinate basis, finite-dimensional extension/reduction results, finite basis-size theorem, and subspace dimension theorem have the specific anchors given above.

The entrywise standard-coordinate-basis verification, monomial and matrix basis arguments, coordinate-isomorphism verification, dual-space definition and dual-basis proof, and added examples are independent exposition or derivations in this vault. They are not described as proofs contained in that Artin slice. The dual-basis discussion is restricted to finite-dimensional $V$; coordinate functionals for an infinite Hamel basis need not span its full algebraic dual.

The arbitrary-dimensional basis theorems remain named external inputs under the Axiom of Choice and are not proved here. Definitions of orthogonal/orthonormal and eigenvector bases are linked to the existing specialized notes; their existence theorems are not added to this note. The overall source status remains `partially-verified` to preserve these boundaries.
