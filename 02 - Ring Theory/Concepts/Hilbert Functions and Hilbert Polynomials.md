---
title: Hilbert Functions and Hilbert Polynomials
aliases:
  - Hilbert Function
  - Hilbert Polynomial
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - graded-algebra
  - hilbert-polynomial
created: 2026-09-22
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, §6, printed pp. 434–438, PDF pp. 449–453; Exercise 14, printed p. 444, PDF p. 459"
source_status: verified
status: not-started
---

# Hilbert Functions and Hilbert Polynomials

## Definition

Let $k$ be a field and $A=k[X_0,\ldots,X_N]$, with each variable of degree $1$. Write $A=\bigoplus_{n\ge0}A_n$. An ideal $\mathfrak a$ is **homogeneous** if every homogeneous component of every $f\in\mathfrak a$ also belongs to $\mathfrak a$. Then $\mathfrak a=\bigoplus_{n\ge0}\mathfrak a_n$, where $\mathfrak a_n=\mathfrak a\cap A_n$.

> [!info] Hilbert function
> The Hilbert function of the homogeneous coordinate ring $B=A/\mathfrak a$ is
> $$
> H_B(n)=\dim_k B_n
> =\dim_k(A_n/\mathfrak a_n),\qquad n\ge0.
> $$
> Lang denotes it by $\chi(n,\mathfrak a)$. It measures the component of exactly degree $n$ and must be distinguished from $\sum_{j=0}^nH_B(j)$.

> [!info] Hilbert polynomial
> The unique polynomial $P_B\in\mathbf Q[T]$ such that $P_B(n)=H_B(n)$ for every sufficiently large integer $n$ is the Hilbert polynomial of $B$. Lang also calls it the Hilbert polynomial of the homogeneous ideal $\mathfrak a$. Existence is supplied by Theorem 6.9; uniqueness follows because the difference of two such polynomials has infinitely many roots and therefore vanishes identically.

See [S2, Ch. X, §6, printed p. 434, PDF p. 449] for the graded dimensions and printed pp. 437–438, PDF pp. 452–453 for existence and terminology. The polynomial need only agree with the function in sufficiently large degrees, not necessarily for all $n\ge0$.

## Intuition

The space $B_n$ identifies degree-$n$ polynomials modulo the relations in $\mathfrak a$. Its Hilbert function counts how many linearly independent expressions remain in that degree. Eventually these dimensions follow a polynomial pattern. The growth order records the dimension of the projective set, while the leading term also retains multiplicity information.

Counting one degree at a time explains the dimension shift: the affine cone associated with $k[X_0,\ldots,X_r]$ has dimension $r+1$, whereas its projective space has dimension $r$, equal to the degree of its Hilbert polynomial.

## Key Properties

### 1. Existence, integer values, and projective dimension

Suppose the projective zero set $Z$ of $\mathfrak a$ is nonempty, and let $r$ be the maximum dimension of its geometric irreducible components. Then

$$
P_B\in\mathbf Q[T],\qquad P_B(\mathbf Z)\subseteq\mathbf Z,
\qquad\deg P_B=r.
$$

Theorem 6.9 proves existence, integer values, and the upper bound $\deg P_B\le r$ [S2, Ch. X, printed pp. 437–438, PDF pp. 452–453]. The degree equality is Exercise 14(b); an independent proof is given in [[02 - Ring Theory/Exercises/Exercise R290 - Homogeneous Primary Decomposition and the Degree of the Hilbert Polynomial#Solution|the solution of Exercise R290]].

For the key lower bound, work over an algebraic closure and choose the homogeneous prime ideal $\mathfrak p\supseteq\mathfrak a$ of a component of maximum dimension. The fraction field of its coordinate ring has transcendence degree $r+1$. Select $r+1$ algebraically independent elements from its degree-$1$ coordinate generators. Their $\binom{n+r}{r}$ monomials of degree $n$ are linearly independent. Hence

$$
H_B(n)\ge\dim_k(A/\mathfrak p)_n\ge\binom{n+r}{r}.
$$

Together with the source's upper bound, this proves the equality and shows that the leading coefficient is positive.

### 2. Field extension preserves the Hilbert function

For a field extension $K/k$, put $B_K=K\otimes_k B$. Then

$$
(B_K)_n\cong K\otimes_k B_n,
\qquad \dim_K(B_K)_n=\dim_k B_n.
$$

Thus $H_{B_K}=H_B$ and $P_{B_K}=P_B$. This follows by extending scalars in each finite-dimensional graded piece, and allows passage to an algebraic closure when discussing geometric components. The source explicitly uses this step [S2, Ch. X, §6, printed p. 437, PDF p. 452].

### 3. A homogeneous regular element gives a difference formula

Let $F\in A$ be homogeneous of degree $d>0$ and a non-zero-divisor on $B=A/\mathfrak a$: explicitly, $FG\in\mathfrak a$ implies $G\in\mathfrak a$. For each $n$, there is an exact sequence

$$
0\longrightarrow B_{n-d}\xrightarrow{\,\cdot F\,}B_n
\longrightarrow (B/FB)_n\longrightarrow0,
$$

where negative-degree components are defined to be zero. Consequently,

$$
H_{B/FB}(n)=H_B(n)-H_B(n-d),
\qquad
P_{B/FB}(T)=P_B(T)-P_B(T-d).
$$

The first formula is [S2, Ch. X, Theorem 6.6, printed p. 436, PDF p. 451]; the second follows by eventual agreement and uniqueness of the polynomial. If $P_B$ has degree $r\ge1$ and leading coefficient $c$, the leading term on the right is $cdrT^{r-1}$.

### 4. Irrelevant ideals and the empty projective set

Let $\mathfrak m=(X_0,\ldots,X_N)$. An ideal $\mathfrak a$ is called irrelevant if $\mathfrak m^s\subseteq\mathfrak a$ for some $s>0$. In that case $A_n\subseteq\mathfrak a$ for $n\ge s$, so $H_B(n)=0$ eventually and $P_B=0$.

Conversely, if $P_B=0$, choose $s$ large enough that $B_n=0$ for all $n\ge s$; then $\mathfrak m^s\subseteq\mathfrak a$. By the Hilbert Nullstellensatz, this is equivalent to the projective zero set being empty, with zeros taken in an algebraic closure. See [S2, Ch. X, Proposition 6.7(a) and its preceding discussion, printed p. 436, PDF p. 451]. The passage back from the algebraic closure follows from equality of the graded dimensions, as detailed in Exercise R290.

> [!warning] The empty-set boundary
> The nonempty hypothesis cannot simply be dropped from the degree equality. If $Z=\varnothing$, the appropriate conclusion is $P_B=0$. The empty set has no maximum dimension among irreducible components, and the degree of the zero polynomial needs a separate convention. No such degree convention is imposed in this note.

### 5. Removing an irrelevant primary component preserves the eventual function

Suppose $\mathfrak a=\mathfrak b\cap\mathfrak q$, where $\mathfrak b$ is homogeneous and $\mathfrak q$ is a homogeneous irrelevant primary ideal. For sufficiently large $n$, we have $\mathfrak q_n=A_n$, hence $\mathfrak a_n=\mathfrak b_n$. Thus $P_{A/\mathfrak a}=P_{A/\mathfrak b}$. This is a direct graded proof of Proposition 6.7(c); the source statement and proof are in [S2, Ch. X, printed p. 436, PDF p. 451].

## Examples

> [!example] Projective space
> For $B=k[X_0,\ldots,X_r]$, the degree-$n$ monomials form a basis, so
> $$
> H_B(n)=\binom{n+r}{r},\qquad P_B(T)=\binom{T+r}{r}.
> $$
> Thus $\deg P_B=r$. If $r=0$, there is one monomial in each degree and the Hilbert polynomial is $1$.

> [!example] A plane conic
> Take $A=k[X_0,X_1,X_2]$ and $0\ne F\in A_2$. Since $A$ is a domain, $F$ is regular. For $n\ge2$, the difference formula gives
> $$
> H_{A/(F)}(n)=\binom{n+2}{2}-\binom{n}{2}=2n+1.
> $$
> Hence $P_{A/(F)}(T)=2T+1$. There is no need to assume that $F$ is irreducible or squarefree; the polynomial still records the homogeneous equation with its multiplicities.

> [!example] Vanishing in all large degrees
> For $A=k[X_0,\ldots,X_N]$ and $\mathfrak a=\mathfrak m^s$, we have
> $$
> H_{A/\mathfrak m^s}(n)=
> \begin{cases}
> \binom{n+N}{N},&0\le n<s,\\
> 0,&n\ge s.
> \end{cases}
> $$
> The Hilbert polynomial is zero, although the Hilbert function can be nonzero in small degrees.

## Related Concepts

- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[02 - Ring Theory/Concepts/Krull Dimension and Catenarity|Krull Dimension and Catenarity]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions, difference formula, irrelevant ideals, field-extension observation, and Theorem 6.9 were checked against rendered source pages [S2, Ch. X, §6, printed pp. 434–438, PDF pp. 449–453]. Existence and the degree upper bound are proved inputs from the source; the full existence proof is not reproduced here. The degree equality is posed as Exercise 14(b), whose complete independent derivation appears in the linked solution. The exact sequence, monomial count, and three examples above have direct derivations.

This note treats homogeneous quotients of standard graded polynomial rings. It does not automatically extend these assertions to arbitrary weighted gradings, general graded modules, or local Hilbert–Samuel functions.
