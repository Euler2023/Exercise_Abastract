---
title: "Exercise Rep145: Symmetric and Exterior Character Series and Newton Identities"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - adams-operations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 23, printed p. 726, PDF p. 741"
created: 2026-09-29
---

# Exercise Rep145: Symmetric and Exterior Character Series and Newton Identities

## Problem Statement

> [!question] Lang XVIII.23 — Including the printed formulas
> In this exercise, we assume the next chapter on alternating products. Let $\rho$ be an irreducible representation of $G$ on a vector space $E$ over $\mathbb C$. Then by functoriality we have the corresponding representations $S^r(\rho)$ and $\bigwedge^r(\rho)$ on the $r$-th symmetric power and $r$-th alternating power of $E$ over $\mathbb C$. If $\chi$ is the character of $\rho$, we let $S^r(\chi)$ and $\bigwedge^r(\chi)$ be the characters of $S^r(\rho)$ and $\bigwedge^r(\rho)$ respectively, on $S^r(E)$ and $\bigwedge^r(E)$. Let $t$ be a variable and let
> $$
> \sigma_t(\chi)=\sum_{r=0}^{\infty}S^r(\chi)t^r,
> \qquad\lambda_t(\chi)=\sum_{r=0}^{\infty}\bigwedge^r(\chi)t^r.
> $$
> (a) Comparing with Exercise 24 of Chapter XIV, prove that for $x\in G$ we have
> $$
> \sigma_t(\chi)(x)=\det(I-\rho(x)t)^{-1},
> \qquad\lambda_t(\chi)(x)=\det(I+\rho(x)t).
> $$
> (b) For a function $f$ on $G$ define $\Psi^n(f)$ by $\Psi^n(f)(x)=f(x^n)$. Show that
> $$
> -\frac{d}{dt}\log\sigma_t(\chi)
> =\sum_{n=1}^{\infty}\Psi^n(\chi)t^n,
> \qquad
> -\frac{d}{dt}\log\lambda_{-t}(\chi)
> =\sum_{n=1}^{\infty}\Psi^n(\chi)t^n.
> $$
> (c) Show that
> $$
> nS^n(\chi)=\sum_{r=1}^{n}\Psi^r(\chi)S^{n-r}(\chi),
> $$
> and
> $$
> n\bigwedge^n(\chi)
> =\sum_{r=1}^{\infty}(-1)^{r-1}\Psi^r(\chi)\bigwedge^{n-r}(\chi).
> $$

> [!warning] Source issues: sign, derivative powers, and negative exterior powers
> Both sums in printed part (b) have upper limit $\infty$. The corrections concern the first minus sign and the powers of $t$:
> $$
> \frac{d}{dt}\log\sigma_t(\chi)
> =-\frac{d}{dt}\log\lambda_{-t}(\chi)
> =\sum_{n\ge1}\Psi^n(\chi)t^{n-1}.
> $$
> Equivalently, multiply all three expressions by $t$ to obtain powers $t^n$. In part (c), replace the exterior sum's upper limit by $n$, or explicitly set $\bigwedge^j(\chi)=0$ for $j<0$, in which case the printed infinite sum becomes that finite sum. Negative exterior powers were not defined in the question.

## Hints

> [!hint]- Hint 1: Diagonalize one group element
> For a fixed $x$, choose an eigenbasis with eigenvalues $\alpha_1,\ldots,\alpha_d$. Monomials give a basis of $S^r(E)$, while wedges of distinct basis vectors give a basis of $\bigwedge^r(E)$.

> [!hint]- Hint 2: Differentiate formal products
> Use $\sigma_t(\chi)(x)=\prod_i(1-\alpha_it)^{-1}$ and $\lambda_t(\chi)(x)=\prod_i(1+\alpha_it)$. The coefficient $\sum_i\alpha_i^n$ is $\chi(x^n)$. Multiply each logarithmic derivative by its original series and compare coefficients of $t^{n-1}$.

## Solution

> [!success]- Independent derivation of the corrected formulas
> All series are formal, with coefficients in the complex class functions on the finite group $G$. No analytic convergence is involved. Put $d=\dim E$, and fix $x\in G$. If $m$ is the order of $x$, then $\rho(x)^m=I$, and $X^m-1$ has distinct roots over $\mathbb C$. Choose an eigenbasis $e_1,\ldots,e_d$ with eigenvalues $\alpha_1,\ldots,\alpha_d$.
>
> **(a) Symmetric and exterior eigenbases.** The monomials $e_1^{a_1}\cdots e_d^{a_d}$ with $a_i\ge0$ and $\sum a_i=r$ form a basis of $S^r(E)$. Their eigenvalues are $\alpha_1^{a_1}\cdots\alpha_d^{a_d}$. Summing over all degrees gives
> $$
> \sigma_t(\chi)(x)
> =\prod_{i=1}^d\left(\sum_{a_i\ge0}(\alpha_it)^{a_i}\right)
> =\prod_{i=1}^d(1-\alpha_it)^{-1}
> =\det(I-\rho(x)t)^{-1}.
> $$
> The basis $e_{i_1}\wedge\cdots\wedge e_{i_r}$, where $i_1<\cdots<i_r$, has eigenvalues $\alpha_{i_1}\cdots\alpha_{i_r}$. Selecting whether each index occurs yields
> $$
> \lambda_t(\chi)(x)=\prod_{i=1}^d(1+\alpha_it)
> =\det(I+\rho(x)t).
> $$
> In particular $S^0(\chi)=\bigwedge^0(\chi)=1$ and $\bigwedge^r(\chi)=0$ for $r>d$. These computations establish (a).
>
> **(b) The logarithmic derivative.** Formal differentiation of the products gives
> $$
> \frac{d}{dt}\log\sigma_t(\chi)(x)
> =\sum_{i=1}^d\frac{\alpha_i}{1-\alpha_it}
> =\sum_{n\ge1}\left(\sum_i\alpha_i^n\right)t^{n-1}.
> $$
> The matrix $\rho(x^n)=\rho(x)^n$ has eigenvalues $\alpha_i^n$, so the coefficient is $\chi(x^n)=\Psi^n(\chi)(x)$. Since $\lambda_{-t}(\chi)(x)=\prod_i(1-\alpha_it)$, its logarithmic derivative is the negative of the same expression. This proves the corrected formulas pointwise, hence as class-function series.
>
> For example the trivial one-dimensional character has $\sigma_t=(1-t)^{-1}$ and $\lambda_{-t}=1-t$. At $t=0$ the printed left sides in (b) are respectively $-1$ and $1$, while both printed right sides have zero constant term. This checks that the correction is necessary even in the smallest example.
>
> **(c) Coefficient comparison.** The first formula in (b) becomes
> $$
> \sigma_t'(\chi)=\sigma_t(\chi)\sum_{r\ge1}\Psi^r(\chi)t^{r-1}.
> $$
> Comparing the coefficient of $t^{n-1}$, for $n\ge1$, gives
> $$
> nS^n(\chi)=\sum_{r=1}^{n}\Psi^r(\chi)S^{n-r}(\chi).
> $$
> Similarly differentiation of $\lambda_t$ gives
> $$
> \lambda_t'(\chi)=\lambda_t(\chi)
> \sum_{r\ge1}(-1)^{r-1}\Psi^r(\chi)t^{r-1},
> $$
> and therefore
> $$
> n\bigwedge^n(\chi)
> =\sum_{r=1}^{n}(-1)^{r-1}\Psi^r(\chi)\bigwedge^{n-r}(\chi).
> $$
> Declaring negative exterior powers zero makes this equivalent to the printed infinite sum. The identity holds for every $n\ge1$, including $n>d$; although the left side then vanishes, the power-sum terms on the right cancel.
>
> **Integrality consequence needed for Adams operations.** Write $\lambda^j\chi=\bigwedge^j(\chi)$. Isolating the $r=n$ term of the last identity yields the integral recursion
> $$
> \Psi^n\chi
> =\sum_{r=1}^{n-1}(-1)^{n-r+1}(\lambda^{n-r}\chi)(\Psi^r\chi)
> +(-1)^{n-1}n\lambda^n\chi.
> $$
> Each exterior-power character belongs to $X(G)$, and $\Psi^1\chi=\chi$. Induction on $n$ proves $\Psi^n\chi\in X(G)$ without division by $n$. The same proof applies to every actual representation, since none of (a)–(c) used irreducibility. Additivity of $f\mapsto f(x^n)$ then proves that $\Psi^n$ preserves all virtual characters.

## Related Concepts

- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Character Rings and Adams Operations]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA440 - Traces of Powers and the Determinant Generating Series|Lang XIV.24: Traces of Powers and Determinants]]

## Notes

- **Source and proof status:** All definitions, all three parts, both infinite upper bounds in (b), and the printed infinite exterior sum in (c) were visually checked at [S2, Ch. XVIII, Exercise 23, printed p. 726, PDF p. 741]. The corrections and proofs are independent; the original formulas are retained above.
- **Logarithms:** The notation $d\log A/dt$ can be read simply as $A'/A$ for a formal series with constant term $1$. Over the complex class-function ring it also agrees with differentiation of the usual formal logarithm.
- **Positivity is different from integrality:** The final recursion shows $\Psi^n\chi$ is a virtual character. It need not be the character of an actual representation, as shown by [[06 - Representation Theory/Exercises/Exercise Rep146 - Coprime Adams Operations Preserve Irreducibility|Lang XVIII.24]].
