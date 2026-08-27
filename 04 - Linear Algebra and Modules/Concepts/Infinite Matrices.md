---
title: Infinite Matrices
aliases:
  - Infinite Matrix
  - Row-Finite Matrices
  - Column-Finite Matrices
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - infinite-matrices
  - sequence-spaces
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, §3.7, printed pp. 96–98, PDF pp. 108–110; Ch. 4, Miscellaneous Problem M.4, printed p. 130, PDF p. 142; Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, §2, printed pp. 740–742, PDF pp. 755–757; Victor G. Kac, Infinite-Dimensional Lie Algebras, 3rd ed., Ch. 1, §1.1, printed p. 1, PDF p. 24"
source_status: verified-with-independent-proofs
status: not-started
---

# Infinite Matrices

## Definition

> [!info] Definition
> Let $F$ be a field. A **countable infinite matrix** over $F$ is a doubly indexed family
>
> $$
> A=(a_{ij})_{i,j\geq 1},
> \qquad a_{ij}\in F.
> $$
>
> It is **row-finite** if every set
>
> $$
> \operatorname{supp}_{\mathrm{row}}(i)
> =\{j:a_{ij}\neq 0\}
> $$
>
> is finite, and **column-finite** if every set
>
> $$
> \operatorname{supp}_{\mathrm{col}}(j)
> =\{i:a_{ij}\neq 0\}
> $$
>
> is finite.

We use two sequence spaces:

$$
F^{\mathbb N}=\{(x_1,x_2,\ldots):x_i\in F\}
$$

and

$$
F^{(\mathbb N)}
=\{x\in F^{\mathbb N}:x_i=0\text{ for all but finitely many }i\}.
$$

The first is the direct product of countably many copies of $F$; the second is their direct sum. In Artin's real notation, these are respectively $\mathbb R^\infty$ and $Z$.

## Algebraic Convention and Intuition

For a row vector $x=(x_i)$, right multiplication would have coordinates

$$
(xA)_j=\sum_{i=1}^{\infty}x_i a_{ij}.
$$

In pure algebra this expression is defined without additional structure only when it has finitely many nonzero summands. No convergence, topology, or summation method is implicit. Thus the relevant finiteness condition depends on both the domain and the desired codomain.

- Acting on **all sequences** requires each output coordinate to inspect only finitely many input coordinates. This is column-finiteness.
- Preserving **finite support** requires the image of each standard basis row to have finite support. This is row-finiteness.

## Artin's $\mathbb R^\infty$ and Its Examples

Artin introduces

$$
\mathbb R^\infty
=\{(a_1,a_2,a_3,\ldots):a_i\in\mathbb R\},
$$

the vector space of all infinite real row vectors, equivalently all real sequences. His Examples 3.7.2 single out three infinite-dimensional subspaces.

### Convergent Sequences

$$
C=\left\{(a_n)\in\mathbb R^\infty:
\lim_{n\to\infty}a_n\text{ exists}\right\}.
$$

For example, $(1,1/2,1/3,\ldots)$ and the constant sequence $(1,1,1,\ldots)$ belong to $C$, whereas $((-1)^n)$ does not.

### Absolutely Summable Sequences

$$
\ell^1
=\left\{(a_n)\in\mathbb R^\infty:
\sum_{n=1}^{\infty}|a_n|<\infty\right\}.
$$

For example, $(1,1/2,1/4,1/8,\ldots)$ belongs to $\ell^1$, whereas the harmonic sequence $(1,1/2,1/3,\ldots)$ does not, even though it belongs to $C$.

### Finite-Support Sequences

$$
Z=\left\{(a_n)\in\mathbb R^\infty:
a_n=0\text{ for all but finitely many }n\right\}.
$$

These examples satisfy

$$
Z\subsetneq\ell^1\subsetneq C\subsetneq\mathbb R^\infty.
$$

The inclusions are immediate from the definitions together with the fact that absolute convergence of $\sum a_n$ forces $a_n\to 0$. The examples above show that the first two inclusions are strict, and $((-1)^n)$ shows that $C\neq\mathbb R^\infty$. This inclusion chain is an independent observation assembled from Artin's three examples.

### Finite Linear Combinations and the Standard Unit Rows

Let

$$
e_i=(0,\ldots,0,1,0,\ldots)
$$

have its only nonzero entry in position $i$, and set $E=\{e_1,e_2,e_3,\ldots\}$. Because algebraic span uses only finite linear combinations,

$$
\operatorname{span}E=Z,
$$

not $\mathbb R^\infty$. In particular,

$$
w=(1,1,1,\ldots)
$$

does not lie in $\operatorname{span}E$. Artin also observes that $\{w,e_1,e_2,\ldots\}$ is linearly independent and that $E$ is a basis of $Z$.

The monomials $1,x,x^2,\ldots$ give the analogous basis of the polynomial space: every polynomial uses only finitely many monomials. By contrast, Artin notes that a Hamel basis of $\mathbb R^\infty$ exists by Zorn's Lemma or the Axiom of Choice, must be uncountable, and cannot be made comparably explicit. This is precisely why the standard rows determine every linear map on $Z$ but not every algebraic linear map on $\mathbb R^\infty$.

## The Two Fundamental Criteria

> [!note] Provenance of Propositions 1–3
> The following propositions are **independent derivations in this vault**. Propositions 1 and 2 solve Artin's Miscellaneous Problem M.4; Artin prints the problem but not these propositions or their proofs. Proposition 3 is a further support calculation, not a proposition quoted from Artin, Lang, or Kac.

> [!abstract] Proposition 1 — Action on all sequences
> **Status:** Independent derivation of Artin M.4.
>
> Right multiplication defines a linear map
>
> $$
> R_A:F^{\mathbb N}\longrightarrow F^{\mathbb N},
> \qquad R_A(x)=xA,
> $$
>
> by finite algebraic sums for every $x\in F^{\mathbb N}$ if and only if $A$ is column-finite.

**Proof.** Suppose first that $A$ is column-finite. For fixed $j$, only finitely many $a_{ij}$ are nonzero, so $(xA)_j$ is a finite sum for every sequence $x$. Hence every output coordinate is defined.

Conversely, suppose column $j$ contains infinitely many nonzero entries. Define a sequence $x$ by

$$
x_i=
\begin{cases}
a_{ij}^{-1},&a_{ij}\neq 0,\\
0,&a_{ij}=0.
\end{cases}
$$

Then the formal expression for $(xA)_j$ contains infinitely many nonzero summands, each equal to $1$. It is not a finite algebraic sum. Thus right multiplication cannot be defined on every element of $F^{\mathbb N}$. $\square$

> [!abstract] Proposition 2 — Endomorphisms of the finite-support space
> **Status:** Independent derivation of Artin M.4.
>
> Right multiplication defines a linear endomorphism
>
> $$
> R_A:F^{(\mathbb N)}\longrightarrow F^{(\mathbb N)}
> $$
>
> if and only if $A$ is row-finite.

**Proof.** If $A$ is row-finite and $x$ has finite support $S$, then

$$
xA=\sum_{i\in S}x_i(e_iA)
$$

is a finite linear combination of finitely supported rows. Therefore $xA$ has finite support.

Conversely, if $R_A$ maps $F^{(\mathbb N)}$ into itself, then the standard basis row $e_i$ belongs to $F^{(\mathbb N)}$, and

$$
e_iA=(a_{i1},a_{i2},\ldots)
$$

must also have finite support. Hence every row of $A$ is finite. $\square$

> [!warning] Codomain matters
> For $x\in F^{(\mathbb N)}$, every coordinate of $xA$ is a finite sum for **every** infinite matrix $A$. Row-finiteness becomes necessary only when “multiplication on $F^{(\mathbb N)}$” means an endomorphism $F^{(\mathbb N)}\to F^{(\mathbb N)}$. If the permitted codomain is the larger space $F^{\mathbb N}$, no row-finiteness condition is needed.

## Matrix Products and Associativity

For two infinite matrices, the formal product is

$$
(AB)_{ij}=\sum_{k=1}^{\infty}a_{ik}b_{kj}.
$$

For a particular pair $(A,B)$ this entry is algebraically defined when only finitely many products $a_{ik}b_{kj}$ are nonzero. Requiring this separately for every pair of matrices does not by itself produce a well-behaved matrix algebra.

> [!abstract] Proposition 3 — Two natural matrix algebras
> **Status:** Independent derivation; not a textbook proposition.
>
> The row-finite matrices form a unital associative algebra, and the column-finite matrices form a unital associative algebra. Transposition interchanges the two algebras.

**Proof.** If $A$ and $B$ are row-finite, then for fixed $i$,

$$
\operatorname{supp}_{\mathrm{row}}^{AB}(i)
\subseteq
\bigcup_{k\in\operatorname{supp}_{\mathrm{row}}^A(i)}
\operatorname{supp}_{\mathrm{row}}^B(k).
$$

The union is finite, so $AB$ is row-finite. All sums involved in an entry of a triple product reduce to a finite set, so the ordinary finite distributive calculation proves associativity.

If $A$ and $B$ are column-finite, then for fixed $j$,

$$
\operatorname{supp}_{\mathrm{col}}^{AB}(j)
\subseteq
\bigcup_{k\in\operatorname{supp}_{\mathrm{col}}^B(j)}
\operatorname{supp}_{\mathrm{col}}^A(k),
$$

which is again finite; associativity follows in the same way. The identity matrix belongs to both classes, and a row of $A$ is a column of $A^{\mathsf T}$. $\square$

Matrices that are both row-finite and column-finite form the common locally finite subalgebra. For right actions on row vectors,

$$
R_B\circ R_A=R_{AB}.
$$

Thus the order of composition must be read carefully: with the usual composition product on endomorphisms, the row-vector correspondence reverses multiplication order. Transposing to the column-vector convention restores the familiar order.

## Relation to Infinite-Dimensional Linear Maps

The standard unit rows $(e_1,e_2,\ldots)$ form a Hamel basis of $F^{(\mathbb N)}$. Therefore every linear endomorphism of $F^{(\mathbb N)}$ is represented uniquely, in the row-vector convention, by a row-finite matrix: the $i$th row is the coordinate vector of $T(e_i)$.

The situation for $F^{\mathbb N}$ is different. The standard unit rows do not span it; for example,

$$
w=(1,1,1,\ldots)
$$

is not a finite linear combination of them. Consequently a general algebraic linear map on $F^{\mathbb N}$ is not determined by the images of the $e_i$.

> [!warning] Representation boundary
> Using the basis-extension theorem, define a linear functional on the span of $w,e_1,e_2,\ldots$ by $f(w)=1$ and $f(e_i)=0$, and extend it to $F^{\mathbb N}$. The map
>
> $$
> x\longmapsto (f(x),0,0,\ldots)
> $$
>
> is algebraically linear but cannot be represented by a column-finite matrix. Thus column-finite matrices describe precisely the coordinatewise finite right actions, not every algebraic endomorphism of the full product space. The extension step is an external standard input equivalent to the usual Hamel-basis extension principle.

## Examples

> [!example] Bilateral finiteness: a shift
> Let $S=(s_{ij})$ with $s_{i,i+1}=1$ and all other entries zero. It is both row-finite and column-finite, and
>
> $$
> (x_1,x_2,\ldots)S=(0,x_1,x_2,\ldots).
> $$

> [!example] Column-finite but not row-finite
> Let $a_{1j}=1$ for every $j$ and let all other entries vanish. Then
>
> $$
> xA=(x_1,x_1,x_1,\ldots).
> $$
>
> This acts on all of $F^{\mathbb N}$, but it does not preserve finite support because $e_1A=(1,1,1,\ldots)$.

> [!example] Row-finite but not column-finite
> Let $b_{i1}=1$ for every $i$ and let all other entries vanish. For $x\in F^{(\mathbb N)}$,
>
> $$
> xB=\left(\sum_i x_i,0,0,\ldots\right),
> $$
>
> where the displayed sum is finite. The same formula is not algebraically defined for every $x\in F^{\mathbb N}$.

> [!example] Neither condition
> The all-ones matrix is neither row-finite nor column-finite. A finitely supported row can be multiplied into it coordinatewise, but the result is generally a constant sequence rather than a finitely supported one. On an arbitrary sequence, even a single output coordinate would require an unspecified infinite sum.

## Other Textbook Viewpoints

### Lang: Infinite Relation Matrices

Lang considers a finitely generated $R$-module $E$ with generators $x_1,\ldots,x_q$. Every relation is a row of $R^q$, and the total family of relations can therefore be arranged as a matrix with possibly infinitely many rows but only $q$ columns. Its determinant ideals are generated by the determinants of all finite $r\times r$ submatrices. If the relation module is finitely generated—in particular in Lang's Noetherian setting—a finite submatrix suffices.

This use of an infinite matrix is invariant-theoretic: only finite minors enter. It neither defines an infinite determinant nor automatically defines an operator on a sequence space.

### Kac: Infinite Dimension Does Not Mean an Infinite Cartan Matrix

Kac's Kac–Moody algebra $\mathfrak g(A)$ can be infinite-dimensional, but the construction in Chapter 1 begins with a finite complex $n\times n$ matrix $A$. The adjective “infinite-dimensional” describes the resulting Lie algebra, not the size of its generalized Cartan matrix in that treatment.

## Key Properties

| Matrix condition | Right-action interpretation | Closure property |
|---|---|---|
| Column-finite | Acts on every sequence in $F^{\mathbb N}$ | Unital associative algebra |
| Row-finite | Preserves $F^{(\mathbb N)}$ | Unital associative algebra |
| Both | Acts on both spaces and preserves finite support | Common locally finite subalgebra |
| Neither | May still multiply selected vectors or matrices | No general action or algebra follows |

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **Verified source material:** Artin defines $\mathbb R^\infty$, the subspaces $C$, $\ell^1$, and $Z$, algebraic span by finite combinations, the standard rows $e_i$, the vector $w=(1,1,\ldots)$, and the basis statements at [S1, Ch. 3, §3.7, printed pp. 96–98, PDF pp. 108–110]. He states the infinite-matrix classification problem at [S1, Ch. 4, Misc. Problem M.4, printed p. 130, PDF p. 142].
- **Independent derivations:** Propositions 1–3, the support calculations, the examples, and the codomain clarification are proved in this note; they are not presented as textbook proofs of Artin's exercise.
- **External standard input:** The nonrepresentable endomorphism example uses the Hamel-basis extension theorem.
- **Cross-source comparison:** Lang's infinite relation matrices and finite-minor construction were checked at [S2, Ch. XIX, §2, printed pp. 740–742, PDF pp. 755–757]. Kac's finite $n\times n$ starting matrix for an infinite-dimensional Kac–Moody algebra was checked at [S9, Ch. 1, §§1.0–1.1, printed p. 1, PDF p. 24].
