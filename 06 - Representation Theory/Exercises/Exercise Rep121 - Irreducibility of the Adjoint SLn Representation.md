---
title: "Exercise Rep121: Irreducibility of the Adjoint SLn Representation"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 36, printed p. 552, PDF p. 567"
created: 2026-09-26
---

# Exercise Rep121: Irreducibility of the Adjoint SLn Representation

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 36 — Irreducibility of $\mathfrak{sl}_n(F)$
> Let $F$ have characteristic $0$. Let $\mathfrak g=\mathfrak{sl}_n(F)$ be the trace-zero matrices with bracket $[X,Y]=XY-YX$. Let $E_{ij}$ be the matrix with one $1$ in position $(i,j)$ and zeros elsewhere. Put $G=SL_n(F)$, and let $A$ be the multiplicative group of invertible diagonal matrices over $F$.
>
> (a) For $i=1,\ldots,n-1$, put $H_i=E_{ii}-E_{i+1,i+1}$. Show that the $E_{ij}$ with $i\ne j$, together with $H_1,\ldots,H_{n-1}$, form a basis of $\mathfrak g$.
>
> (b) For $g\in G$, let $c(g)X=gXg^{-1}$ be the conjugation action on $\mathfrak g$. Show that each $E_{ij}$ is an eigenvector for this action restricted to $A$.
>
> (c) Prove that the conjugation representation of $G$ on $\mathfrak g$ is irreducible: if a nonzero subspace $V\subseteq\mathfrak g$ is $c(G)$-stable, then $V=\mathfrak g$. **Printed hint.** Fill in the sketch cited as [JoL 01], Chapter VII, Theorem 1.5. For $i\ne j$, $E_{ij}$ is nilpotent, so $\exp(tE_{ij})$ is a polynomial. In formal power series, for $x(t)=\exp(tX)$, verify
>
> $$
> \left.\frac{d}{dt}x(t)Yx(t)^{-1}\right|_{t=0}
> =XY-YX=[X,Y].
> $$

> [!warning] Source issue and literal ambiguity
> The printed $A$ consists of all invertible diagonal matrices and is generally not contained in $G=SL_n(F)$, so $c(G)$ cannot literally be “restricted to $A$.” Part (b)'s “each $E_{ij}$” can be read as referring back to the $i\ne j$ units in (a); read without that context, it also includes $E_{ii}$, which has trace $1$ and is not in $\mathfrak g$. The meaningful version extends conjugation to $GL_n(F)$ and takes $i\ne j$, or restricts to $T=A\cap SL_n(F)$. The proof uses $T$ for the representation and records the $GL_n$ formula too. Part (c) also needs $n\ge2$ for a nonzero representation.

## Hints

> [!hint]- Hint 1
> The off-diagonal units span all off-diagonal entries. The adjacent diagonal differences span the trace-zero diagonal matrices.

> [!hint]- Hint 2
> For $t=\operatorname{diag}(t_1,\ldots,t_n)$, calculate $tE_{ij}t^{-1}=(t_i/t_j)E_{ij}$. Choose one $t\in T$ whose off-diagonal eigenvalues are pairwise distinct and different from $1$.

> [!hint]- Hint 3
> From $V$ stable under $I+sE_{ij}$ for all $s\in F$, differentiate the conjugation polynomial at $s=0$ to get $[E_{ij},V]\subseteq V$. Isolate a matrix unit using the diagonal action, then move it to all other positions by determinant-one signed permutations.

## Solution

> [!success]- Independently derived proof
> Assume $n\ge2$. The case $n=1$ is addressed in Notes.
>
> **(a)** Each off-diagonal matrix unit has trace zero and the $n(n-1)$ such units are linearly independent. A trace-zero diagonal matrix has the form $\operatorname{diag}(a_1,\ldots,a_n)$ with $\sum_i a_i=0$. Setting $b_i=a_1+\cdots+a_i$ gives
>
> $$
> \operatorname{diag}(a_1,\ldots,a_n)
> =\sum_{i=1}^{n-1}b_i(E_{ii}-E_{i+1,i+1}).
> $$
>
> The $H_i$ are linearly independent (inspect diagonal entries successively), so the displayed $n^2-1$ matrices form a basis of $\mathfrak g$.
>
> **(b), with the corrected domain.** Conjugation by any $t=\operatorname{diag}(t_1,\ldots,t_n)\in A\subset GL_n(F)$ preserves trace and satisfies
>
> $$
> tE_{ij}t^{-1}=\frac{t_i}{t_j}E_{ij}\quad(i\ne j),
> \qquad tH_rt^{-1}=H_r.
> $$
>
> Thus the off-diagonal $E_{ij}$ are weight vectors for the extended $GL_n$ action, and also for its restriction to $T=A\cap G$. The original $E_{ii}$ do not belong to $\mathfrak g$.
>
> **(c): invariant subspaces are Lie ideals.** Let $0\ne V\subseteq\mathfrak g$ be stable under conjugation by $G$. For $i\ne j$, $E_{ij}^2=0$, so $u_{ij}(s)=\exp(sE_{ij})=I+sE_{ij}\in G$ and $u_{ij}(s)^{-1}=I-sE_{ij}$. For $Y\in V$,
>
> $$
> u_{ij}(s)Yu_{ij}(s)^{-1}
> =Y+s[E_{ij},Y]-s^2E_{ij}YE_{ij}\in V
> \qquad(s\in F).
> $$
>
> Passing to the quotient $\mathfrak g/V$, this polynomial vanishes for every $s$ in the infinite field $F$, so each coefficient vanishes. In particular $[E_{ij},Y]\in V$. This is exactly the derivative identity in the source hint for $X=E_{ij}$. More generally, $\exp(tX)=I+tX+O(t^2)$ and its formal inverse is $I-tX+O(t^2)$, so the coefficient of $t$ in $\exp(tX)Y\exp(-tX)$ is $[X,Y]$ for any $X$.
>
> **Isolate a matrix unit.** The subspace $V$ is stable under the determinant-one diagonal group $T$. Because $F$ contains $\mathbb Q$, one can choose $t=\operatorname{diag}(2^{b_1},\ldots,2^{b_n})\in T$ with integers $b_1,\ldots,b_n$ such that all differences $b_i-b_j$ for $i\ne j$ are distinct and nonzero. For example, set $b_i=2^{i-1}$ for $i<n$ and $b_n=-\sum_{i<n}b_i$: differences among the first $n-1$ powers of $2$ are distinct by their $2$-adic valuations, while differences involving $b_n$ have larger absolute value and are mutually distinct. The eigenvalues $2^{b_i-b_j}$ of $\operatorname{Ad}(t)$ on the off-diagonal lines are therefore pairwise distinct and different from the eigenvalue $1$ on the diagonal subspace.
>
> Apply Lagrange interpolation polynomials in the single operator $\operatorname{Ad}(t)$ to any nonzero $Y\in V$. Since $V$ is stable under this operator, it contains either some nonzero multiple of an $E_{ij}$ or a nonzero trace-zero diagonal matrix $D=\operatorname{diag}(d_1,\ldots,d_n)$. In the latter case $D$ is not scalar: characteristic $0$ and $\operatorname{tr}D=0$ would force a scalar $D$ to be zero. Choose $i\ne j$ with $d_i\ne d_j$. The preceding bracket stability gives
>
> $$
> [E_{ij},D]=(d_j-d_i)E_{ij}\in V,
> $$
>
> so again $E_{ij}\in V$.
>
> For any ordered pair $k\ne l$, a permutation matrix sends the coordinate pair $(i,j)$ to $(k,l)$. If its determinant is $-1$, multiply it by a diagonal matrix of determinant $-1$; the resulting signed permutation lies in $SL_n(F)$ and conjugates $E_{ij}$ to a nonzero scalar multiple of $E_{kl}$. Therefore every off-diagonal $E_{kl}$ lies in $V$. Finally, $[E_{ij},E_{ji}]=E_{ii}-E_{jj}$ lies in $V$ by bracket stability. The elements in (a) now all lie in $V$, so $V=\mathfrak g$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source and proof status:** The three subparts, printed $A$ convention, and formal derivative hint were checked on [S2, Ch. XIII, Ex. 36, printed p. 552, PDF p. 567]. The proof above is independent; it does not import the cited [JoL 01] argument. Formal differentiation, diagonal spectral projection, and matrix-unit commutators are carried out explicitly.
- **Boundary:** At $n=1$, $\mathfrak{sl}_1(F)=0$. Part (a) has the empty basis and (b) has no off-diagonal units, while (c) is not an irreducibility assertion under the usual convention that an irreducible representation must be nonzero.
