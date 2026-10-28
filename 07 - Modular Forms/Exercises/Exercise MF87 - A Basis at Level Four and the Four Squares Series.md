---
title: "Exercise MF87: A Basis at Level Four and the Four Squares Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.6, Exercise 4.6.4, printed p. 133, PDF p. 147"
source_refs:
  - "S7/ch-4/sec-6/ex-4"
created: 2026-10-28
---

# Exercise MF87: A Basis at Level Four and the Four Squares Series

## Problem Statement

> [!question] Original Exercise 4.6.4
> Use results from Chapter 3 to show that $S_2(\Gamma_0(4))=0$ and that $\dim M_2(\Gamma_0(4))=2$. This section shows that $E_2^{1_1,1_1,2}$ and $E_2^{1_1,1_1,4}$ form a basis of $M_2(\Gamma_0(4))$; the function $\theta(\tau,4)$ from the beginning of Section 1.2 lies in $M_2(\Gamma_0(4))$ as well. Show that $\theta(\tau,4)$ is a scalar multiple of $E_2^{1_1,1_1,4}$. Show that $E_2^{1_1,1_1,4}-3E_2^{1_1,1_1,2}$ is a scalar multiple of
> $$
> f(\tau)=\sum_{\substack{n\ge1\\n\ \mathrm{odd}}}\sigma_1(n)q^n
> $$
> (which is not a cusp form despite vanishing at infinity). Thus $\theta(\tau,4)$ and $f(\tau)$ form a basis of $M_2(\Gamma_0(4))$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> The index is $6$, the cusp count is $3$, and there are no elliptic points of orders two or three.

> [!hint]- Hint 2
> Use the constant and first coefficient to identify the theta series. For the other equality distinguish odd indices from $n=2^rm$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The index of $\Gamma_0(4)$ is $4(1+1/2)=6$. It also follows by counting primitive pairs modulo $4$: there are $16-4=12$, and the free action of the two units gives six projective rows. The cusp count formula is $\sum_{d\mid4}\phi(\gcd(d,4/d))=1+1+1=3$. There are no elliptic points of order two: a determinant-one matrix in $\Gamma_0(4)$ of trace zero would require $a^2+1\equiv0\pmod4$, impossible. Trace $\pm1$ for order three would require $a^2\mp a+1\equiv0\pmod4$, also impossible on all four residues. The Chapter 3 genus formula therefore gives $g=1+6/12-3/2=0$. Its weight-two dimension theorem gives $\dim S_2=g=0$ and $\dim M_2=g-1+3=2$.
>
> Put $E=E_2^{1_1,1_1}=-1/12+2\sum\sigma_1(n)q^n$ and $F_t=E-tE(t\tau)=E_2^{1_1,1_1,t}$. Their initial terms are $F_2=1/12+2q+\cdots$ and $F_4=1/4+2q+\cdots$, which are independent: the determinant of their constant/first-coefficient pairs is $-1/3\ne0$. Hence they are a basis of the two-dimensional space.
>
> The four-squares theta series has constant $1$ and coefficient $8$ at $q$, because the vectors of squared length one are the eight signed coordinate vectors in $\mathbb Z^4$. Write $\theta=aF_2+bF_4$. Comparing the two coefficients gives $a+3b=12$ and $a+b=4$, hence $a=0,b=4$. Therefore $\theta(\tau,4)=4F_4$.
>
> The difference $F_4-3F_2$ has zero constant and coefficient at $n\ge1$ equal to
> $$
> -4\bigl(\sigma_1(n)-3\sigma_1(n/2)+2\sigma_1(n/4)\bigr),
> $$
> with nonintegral indices contributing zero. If $n$ is odd, the parenthesis is $\sigma_1(n)$. If $n=2m$ with $m$ odd, it is $(3-3)\sigma_1(m)=0$. For $n=2^rm$ with $r\ge2$, $m$ odd, it is
> $$
> \bigl((2^{r+1}-1)-3(2^r-1)+2(2^{r-1}-1)\bigr)\sigma_1(m)=0.
> $$
> Thus $F_4-3F_2=-4f$. In particular $f$ is a modular form, is nonzero because its first coefficient is $1$, and is not cuspidal because the entire cusp space is zero. The forms $\theta$ and $f$ are independent by their constant coefficients, so they form a basis. Vanishing at infinity alone does not imply vanishing at the other two cusps.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.6.4, printed p. 133 / PDF p. 147]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** The Chapter 3 genus and weight-two dimension formulas are used, with the latter checked on printed p.88/PDF p.102. The general $\Gamma_0(N)$ cusp count was checked on printed p.103/PDF p.117. The theta modularity from Section 1.2 is imported; its first coefficient is counted directly here.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
