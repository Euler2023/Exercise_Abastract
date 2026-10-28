---
title: "Exercise LA647: Odd Irreducible Two Dimensional Representations from Traces"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.6, Exercise 9.6.1, printed p. 409, PDF p. 421"
source_refs:
  - "S7/ch-9/sec-6/ex-1"
created: 2026-10-28
---

# Exercise LA647: Odd Irreducible Two Dimensional Representations from Traces

## Problem Statement

> [!question] Original Exercise 9.6.1
> Consider $\rho,\rho':G_{\mathbb Q}\to\mathrm{GL}_2(\mathbb Q_\ell)$ with $\rho$ irreducible and $\det\rho(\mathrm{conj})=-1$. Assume the characteristic polynomials of the two representations agree. Prove equivalence as follows.
>
> (a) Show complex conjugation has distinct eigenvalues in $\mathbb Q_\ell$, so after conjugating both matrices may be assumed to be $\operatorname{diag}(1,-1)$. (Hints for this exercise are at the end of the book.)
>
> (b) Show there is $\sigma$ with $\rho(\sigma)=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ having $bc\ne0$. Write the primed matrix similarly. Use equality of traces at $\sigma$ and $\mathrm{conj}\,\sigma$ and determinants at $\sigma$ to prove $a=a'$, $d=d'$, and $bc=b'c'\ne0$. Show a further conjugation makes the two matrices equal.
>
> (c) For arbitrary $\tau$, prove equality of its two matrices using traces at $\tau$, $\mathrm{conj}\,\tau$, $\sigma\tau$, and $\mathrm{conj}\,\sigma\tau$.

## Hints

> [!hint]- Hint 1
> The involution polynomial has distinct roots even over $\mathbb Q_2$.

> [!hint]- Hint 2
> Irreducibility rules out a common upper or lower triangular form. Multiply an upper and a lower triangular matrix if necessary.

> [!hint]- Hint 3
> Traces with and without the diagonal involution separately recover the two diagonal entries.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $c_\infty$ for complex conjugation. Since $c_\infty^2=1$, its minimal polynomial divides $(X-1)(X+1)$, which has distinct roots in every characteristic-zero field, including $\mathbb Q_2$. Determinant $-1$ forces both eigenvalues, so conjugate each representation to make $\rho(c_\infty)=\rho'(c_\infty)=C=\operatorname{diag}(1,-1)$.
>
> Irreducibility implies some matrix has nonzero upper-right entry and some matrix has nonzero lower-left entry; otherwise one coordinate line is invariant. If neither already has both, they have the forms $U=\begin{pmatrix}a&b\\0&d\end{pmatrix}$ and $L=\begin{pmatrix}e&0\\g&h\end{pmatrix}$ with $b,g\ne0$ and diagonal entries nonzero. Their product has upper-right $bh\ne0$ and lower-left $dg\ne0$. This proves the required existence.
>
> For this $\sigma$, the equalities $a+d=a'+d'$ and $a-d=a'-d'$ imply $a=a'$ and $d=d'$. Equal determinants give $bc=b'c'\ne0$. Conjugate the primed representation by $D=\operatorname{diag}(1,b/b')$. This commutes with $C$; the new upper-right entry is $b$ and lower-left is $c'b'/b=c$. Thus its $\sigma$ matrix also agrees.
>
> Now write $\rho(\tau)=\begin{pmatrix}u&v\\w&z\end{pmatrix}$ and the primed version similarly. Traces at $\tau$ and $c_\infty\tau$ give $u=u'$ and $z=z'$. Traces at $\sigma\tau$ and $c_\infty\sigma\tau$ give respectively equality of the sums and differences of $au+bw$ and $cv+dz$. Hence $bw=bw'$ and $cv=cv'$. Since $b,c\ne0$, $w=w'$ and $v=v'$. Every matrix agrees after the fixed conjugations, proving equivalence. The argument also works over any common field of characteristic different from two.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Hypothesis clarification:** Equality of characteristic polynomials means equality at every group element. If it is known only at almost all Frobenius elements, continuity and Chebotarev density must first extend it to all elements.
- **Method boundary:** No semisimplicity theorem for the primed representation is assumed; the explicit matrix calculation proves the equivalence.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
