---
title: "Exercise LA591: Triangular Factorization Near an Antidiagonal Matrix"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - local-rings
source: "Finite local ring adaptation of Andrew Graham, On the p-adic interpolation of unitary Friedberg–Jacquet periods, Algebra & Number Theory 18(6), 2024, Lemma A.1.1, printed p. 1171, PDF p. 56; uniqueness and explicit finite examples are additional independent deductions"
paper_refs:
  - "paper/graham-2024/lemma-A.1.1"
created: 2026-10-26
---

# Exercise LA591: Triangular Factorization Near an Antidiagonal Matrix

## Problem Statement

> [!question] Finite local ring adaptation
> Let $p$ be a prime, $m>r\ge1$, $A=\mathbb Z/p^m\mathbb Z$, and $I=p^rA$. Let $d\ge1$, let $J=J_d$ be the antidiagonal permutation matrix, and let $Y\in M_d(I)$, meaning that every entry of $Y$ belongs to $I$.
>
> **(a)** Prove that every element of $1+I$ is a unit. For $d=2$, find explicit matrices
> $$
> R=\begin{pmatrix}1&t\\0&1\end{pmatrix},\qquad
> S=\begin{pmatrix}a&b\\0&c\end{pmatrix}
> $$
> such that $J+Y=RJS$, $t,b\in I$, and $a,c\in1+I$.
>
> **(b)** Prove for every $d$ that there exist an upper unitriangular matrix $R$ and an invertible upper triangular matrix $S$, with $R\equiv S\equiv I_d\pmod I$, such that
> $$
> J+Y=RJS.
> $$
> Give a complete elimination argument over $A$; do not import an Iwahori decomposition.
>
> **(c)** Prove that the pair $(R,S)$ is unique among pairs with the stated triangular shapes and congruences.
>
> **(d)** Take $p=3$, $m=2$, $r=1$, $d=2$, and
> $$
> Y=\begin{pmatrix}3&6\\3&6\end{pmatrix}\quad\text{over }\mathbb Z/9\mathbb Z.
> $$
> Compute $R,S$ and multiply to check the identity. Explain why allowing arbitrary $Y\in M_d(A)$ would make the existence assertion false.

## Hints

> [!hint]- Hint 1
> The ideal $I$ is nilpotent, so a finite geometric sum inverts $1+z$ for $z\in I$. For $d=2$, multiply $RJS$ and solve from its bottom row upward.

> [!hint]- Hint 2
> Set $M=(J+Y)J=I_d+YJ$. Seek $M=RL$ with $R$ upper unitriangular and $L$ lower triangular. Write $M=\begin{pmatrix}C&b\\c&s\end{pmatrix}$; $s$ is a unit. Apply induction to the smaller matrix $C-bs^{-1}c$. For uniqueness, a matrix that is both lower triangular and upper unitriangular must be the identity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent proof of a finite local ring adaptation of Graham's existence lemma. Uniqueness, the explicit formulas, and the finite example are added deductions. No statement about adic spaces is assumed or proved here.
>
> **(a) Units and the two-dimensional formula.** Since $I=p^rA$ and $r\ge1$, one has $I^m=0$: a product of $m$ elements of $I$ is divisible by $p^{rm}$, hence by $p^m$. For $z\in I$ this gives $z^m=0$ and
> $$
> (1+z)\sum_{j=0}^{m-1}(-z)^j=1-(-z)^m=1.
> $$
> Thus every $1+z$ is invertible.
>
> Write $Y=(y_{ij})$. Matrix multiplication gives
> $$
> RJS
> =\begin{pmatrix}1&t\\0&1\end{pmatrix}
> \begin{pmatrix}0&1\\1&0\end{pmatrix}
> \begin{pmatrix}a&b\\0&c\end{pmatrix}
> =\begin{pmatrix}ta&c+tb\\a&b\end{pmatrix}.
> $$
> Equating this with $J+Y$ suggests, and uniquely determines,
> $$
> a=1+y_{21},\qquad b=y_{22},\qquad
> t=y_{11}a^{-1},\qquad c=1+y_{12}-tb.
> $$
> Here $a\in1+I$ is a unit, $t,b\in I$, and $c\in1+I$ is a unit. The four equations $ta=y_{11}$, $c+tb=1+y_{12}$, $a=1+y_{21}$, and $b=y_{22}$ verify the factorization and both congruences.
>
> **(b) Elimination near the identity.** We first prove by induction on $d$ the following assertion: every $M\in M_d(A)$ with $M\equiv I_d\pmod I$ has a factorization
> $$
> M=RL,
> $$
> where $R$ is upper unitriangular, $L$ is invertible lower triangular, and both factors are congruent to $I_d$ modulo $I$.
>
> For $d=1$, take $R=(1)$ and $L=M$. Its entry lies in $1+I$, so it is a unit by part (a).
>
> Suppose $d\ge2$ and write
> $$
> M=\begin{pmatrix}C&b\\c&s\end{pmatrix},
> $$
> where $C$ has size $(d-1)\times(d-1)$, $b$ is a column, $c$ is a row, and $s\in A$. The congruence on $M$ implies
> $$
> C\equiv I_{d-1}\pmod I,\qquad b,c\equiv0\pmod I,\qquad s\in1+I.
> $$
> Part (a) makes $s$ invertible. Every entry of $bs^{-1}c$ lies in $I^2\subseteq I$, so
> $$
> C-bs^{-1}c\equiv I_{d-1}\pmod I.
> $$
> By induction write $C-bs^{-1}c=R_0L_0$, with the required triangularity and congruences in size $d-1$. Set
> $$
> R=\begin{pmatrix}R_0&bs^{-1}\\0&1\end{pmatrix},\qquad
> L=\begin{pmatrix}L_0&0\\c&s\end{pmatrix}.
> $$
> Then $R$ is upper unitriangular, $L$ is lower triangular, both are congruent to the identity, and direct multiplication gives
> $$
> RL
> =\begin{pmatrix}R_0L_0+bs^{-1}c&b\\c&s\end{pmatrix}
> =\begin{pmatrix}C&b\\c&s\end{pmatrix}=M.
> $$
> Invertibility introduces no field assumption: if a matrix $Q$ has entries in $I$, then $Q^m=0$, because every entry of $Q^m$ is a sum of products of $m$ elements of $I$. Consequently any matrix $I_d+Q$ is inverted by $\sum_{j=0}^{m-1}(-Q)^j$. This applies to both factors, and completes the induction.
>
> Now use $J^2=I_d$ and set
> $$
> M=(J+Y)J=I_d+YJ.
> $$
> Permuting the columns of $Y$ does not change membership of its entries in $I$, so $M\equiv I_d\pmod I$. Factor $M=RL$ as above and put $S=JLJ$. Conjugation by $J$ reverses the order of row and column indices:
> $$
> S_{ij}=L_{d+1-i,d+1-j}.
> $$
> If $i>j$, then $d+1-i<d+1-j$, so $S_{ij}=0$ by lower triangularity of $L$. Hence $S$ is upper triangular. It is invertible because $L$ and $J$ are, and $S\equiv JI_dJ=I_d\pmod I$. Finally,
> $$
> RJS=RJ(JLJ)=RLJ=MJ=J+Y.
> $$
>
> **(c) Uniqueness.** Suppose $R_1JS_1=R_2JS_2=J+Y$. Put $L_i=JS_iJ$; each $L_i$ is invertible lower triangular. Multiplication on the right by $J$ gives $R_1L_1=R_2L_2$, so
> $$
> R_2^{-1}R_1=L_2L_1^{-1}.
> $$
> The left side is upper unitriangular: products preserve that shape, and the inverse of $I_d+N$ for strictly upper triangular $N$ is the finite sum $\sum_{j=0}^{d-1}(-N)^j$. The right side is lower triangular. Indeed, the inverse of an invertible lower triangular matrix with unit diagonal entries is lower triangular, either by solving its columns successively or by writing it as a diagonal matrix times a lower unitriangular matrix. Here all diagonal entries of $L_i$ lie in $1+I$, so they are units.
>
> A matrix with both shapes has zero entries above and below its diagonal and has all diagonal entries equal to $1$. It must be $I_d$. Thus $R_1=R_2$, then $L_1=L_2$, and finally $S_1=S_2$.
>
> **(d) Numerical check and the role of the hypothesis.** In $A=\mathbb Z/9\mathbb Z$, the formulas in part (a) give
> $$
> a=4,\quad a^{-1}=7,\quad b=6,\quad t=3\cdot7=3,\quad
> c=1+6-3\cdot6=7.
> $$
> All equalities here are in $A$. Therefore
> $$
> R=\begin{pmatrix}1&3\\0&1\end{pmatrix},\qquad
> S=\begin{pmatrix}4&6\\0&7\end{pmatrix},\qquad
> RJS=\begin{pmatrix}3&7\\4&6\end{pmatrix}=J+Y.
> $$
> Both factors are congruent to $I_2$ modulo $3$. If the smallness hypothesis on $Y$ is removed, take $Y=-J$. Then $J+Y=0$, whereas a product $RJS$ of invertible matrices is invertible and cannot be zero. Thus existence cannot hold for arbitrary $Y$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation#Elementary Matrices|Elementary Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent Elements]]

## Notes

- **Source anchor:** [Andrew Graham, Appendix A, Lemma A.1.1, printed p. 1171, PDF p. 56]. The page was rendered at 200 dpi and visually checked. The article is published in *Algebra & Number Theory* 18(6) (2024), DOI [10.2140/ant.2024.18.1117](https://doi.org/10.2140/ant.2024.18.1117); its local filename labels the year as 2026.
- **Adaptation boundary:** The source's lemma concerns small matrix entries on adic discs and uses an Iwahori decomposition to prove existence. This exercise replaces that setting with the finite ring $\mathbb Z/p^m\mathbb Z$ and proves the needed factorization by block elimination. The uniqueness assertion, explicit two-dimensional formulas, and counterexample are independent additions rather than quotations of the source lemma.
- **Finite verification actually run:** For $p=3$, $m=2$, $r=1$, $d=2$, exhaustive enumeration checked all $3^4=81$ matrices $Y\in M_2(3A)$. Enumerating $t,b\in3A$ and $a,c\in1+3A$ gives exactly one factor pair for every such $Y$; the formulas in part (a) agree with every pair. This is a check of this finite case, while parts (b) and (c) supply the general proof.
- **Hypotheses and method:** No oddness assumption on $p$ is needed for this finite ring argument. The decisive property is that entries of the perturbation lie in a nilpotent ideal, making every pivot congruent to $1$ invertible. Division by arbitrary nonzero ring elements would be invalid; the proof divides only by such units.
- **Routing:** The main work is triangular matrix multiplication and elimination. The local ring supplies controlled units, so the primary topic remains linear algebra, with ring-theoretic prerequisites linked explicitly.
