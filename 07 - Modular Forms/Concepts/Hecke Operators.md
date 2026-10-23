---
title: Hecke Operators
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, 2005, corrected fourth printing 2016, §§5.2–5.3, printed pp. 168–180, PDF pp. 182–194; Theorems 5.5.3–5.5.4, printed p. 187, PDF p. 201; §5.8, printed pp. 196–200, PDF pp. 210–214; Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §15, printed p. 319, PDF p. 334"
source_status: partially-verified
status: not-started
---

# Hecke Operators

## Definition

The first two formulas use **full level**, $M_k=M_k(SL_2(\mathbb Z))$. General-level formulas, including the character and bad primes, are specified separately below.

> [!info] Definition (Hecke Operator $T_n$)
> For a [[07 - Modular Forms/Concepts/Modular Forms Definition|modular form]] $f \in M_k$ and positive integer $n$, the **Hecke operator** $T_n$ is defined by:
> $$
> T_n f(\tau) = n^{k-1} \sum_{\substack{ad = n \\ 0 \leq b < d}} d^{-k} f\left(\frac{a\tau + b}{d}\right)
> $$

> [!info] Definition (On Fourier Coefficients)
> If $f(\tau) = \sum_{m=0}^{\infty} a_m q^m$, then:
> $$
> (T_n f)(\tau) = \sum_{m=0}^{\infty} \left( \sum_{d | \gcd(m,n)} d^{k-1} a_{mn/d^2} \right) q^m
> $$

## Intuition

A Hecke operator averages a modular form over finite lattice correspondences. On Fourier expansions, it combines coefficients with indices related by divisors. Commuting operators can still have nontrivial Jordan blocks, so an eigenbasis needs an additional normality or semisimplicity argument.

## General Level and Character

For $f\in M_k(N,\chi)$, extend the Dirichlet character $\chi$ by zero on integers not relatively prime to $N$. Proposition 5.3.1 gives
$$
a_m(T_nf)=\sum_{d\mid\gcd(m,n)}\chi(d)d^{k-1}a_{mn/d^2}(f),\qquad m\geq0,
$$
with $\gcd(0,n)=n$. In particular,
$$
a_m(T_pf)=a_{mp}(f)+\chi(p)p^{k-1}a_{m/p}(f).
$$
Use $a_{m/p}=0$ when $m/p$ is not a nonnegative integer; for $m=0$ it is $a_0$. When $p\mid N$, the character value is zero and $T_p$ is the $U_p$ operator $a_m\mapsto a_{mp}$. For arbitrary forms on $\Gamma_1(N)$, the character scalar is replaced by the diamond action in Proposition 5.2.2(a).

The $q^1$ coefficient in the general formula is $a_n(f)$. Hence a normalized eigenform satisfies $T_nf=a_n(f)f$ for every positive $n$, including composite $n$; see [[07 - Modular Forms/Exercises/Exercise MF5 - Hecke Operators|Exercise MF5]]. Its prime-power recurrence includes the factor $\chi(p)$, which is absent in the full-level formulas below.

## Key Properties

These statements use full level. Here $n\geq1$, and the sum in the definition runs over positive $a,d$ with $ad=n$.

1. $T_n: M_k \to M_k$ is a linear operator
2. $T_n: S_k \to S_k$ preserves [[07 - Modular Forms/Concepts/Cusp Forms|cusp forms]]
3. $T_m T_n = T_{mn}$ when $\gcd(m,n) = 1$
4. $T_p T_{p^r} = T_{p^{r+1}} + p^{k-1} T_{p^{r-1}}$ for prime $p$ and integer $r\geq1$
5. Hecke operators commute: $T_m T_n = T_n T_m$

## Eigenforms

> [!info] Definition (Hecke Eigenform)
> A modular form $f \in M_k$ is a **Hecke eigenform** if it is a simultaneous eigenvector for all $T_n$:
> $$
> T_n f = \lambda_n f
> $$

> [!abstract] Theorem (Normalized Eigenforms)
> For a normalized eigenform $f = \sum a_n q^n$ (with $a_1 = 1$):
> - $T_n f = a_n f$ (eigenvalue equals Fourier coefficient)
> - $a_m a_n = a_{mn}$ when $\gcd(m,n) = 1$ (multiplicativity)
> - $a_{p^{r+1}} = a_p a_{p^r} - p^{k-1} a_{p^{r-1}}$ for integers $r\geq1$

## Action on Eisenstein Series

> [!example] Example
> For the normalized full-level [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein series]] $E_k$, with even $k\geq4$:
> $$
> T_n E_k = \sigma_{k-1}(n) E_k
> $$
> So $E_k$ is an eigenform with eigenvalue $\sigma_{k-1}(n)$.

The full character-dependent Eisenstein computation, including constant terms and the exceptional weight-two case, is proved in [[07 - Modular Forms/Exercises/Exercise MF13 - Hecke Eigenvalues of Generalized Eisenstein Series|Exercise MF13]].

## Action on $\Delta$

> [!example] Example
> The [[07 - Modular Forms/Concepts/Discriminant Function|discriminant]] $\Delta$ is a Hecke eigenform:
> $$
> T_n \Delta = \tau(n) \Delta
> $$

Here $\tau(n)$ is the Ramanujan tau function and $\Delta=q\prod_{n\geq1}(1-q^n)^{24}$ is the normalized cusp form. Diamond–Shurman’s elliptic-discriminant normalization differs by the nonzero scalar $(2\pi)^{12}$; the eigenvalues are unchanged by that scalar.

## Petersson Inner Product

On $S_k(\Gamma_1(N))$, with its [[07 - Modular Forms/Concepts/Petersson Inner Product|Petersson inner product]], Theorem 5.5.3 gives, for $p\nmid N$,
$$
\langle p\rangle^*=\langle p\rangle^{-1},\qquad T_p^*=\langle p\rangle^{-1}T_p.
$$

Thus on $S_k(N,\chi)$ one has $T_p^*=\overline{\chi(p)}T_p$ for $p\nmid N$. For trivial character these good-prime operators are self-adjoint. At full level all $T_n$ are self-adjoint. No corresponding general assertion about bad-prime operators is made.

## Spectral Theory

> [!abstract] Theorem (Operators away from the level)
> The space $S_k(\Gamma_1(N))$ has an orthogonal basis of simultaneous eigenvectors for
> $$
> \{\langle n\rangle,T_n:\gcd(n,N)=1\}.
> $$
> This is Theorem 5.5.4, printed p. 187 / PDF p. 201: these operators commute and are normal, so the finite-dimensional spectral theorem applies. Normalize the vectors to obtain an orthonormal basis. For $N=1$, this covers all Hecke operators.

> [!warning] Bad-prime boundary
> At a general level the complete Hecke algebra need not have an eigenbasis. In the four-dimensional oldspace of [[04 - Linear Algebra and Modules/Exercises/Exercise LA581 - Three Eigenforms in a Four Dimensional Oldspace|Exercise LA581]], $U_2$ has characteristic polynomial $X^2(X^2+2X+2)$ and a one-dimensional zero eigenspace. It is not diagonalizable. Exactly three normalized common eigenforms occur in that four-dimensional space. The linked note gives an independent solution of original Exercise 5.8.3, printed p. 200 / PDF p. 214.

This spectral decomposition is fundamental for:

- [[07 - Modular Forms/Concepts/L-functions|L-functions]] with Euler products
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity]] of elliptic curves

## Diamond Operators

> [!info] Definition (Diamond Operator)
> For [[07 - Modular Forms/Concepts/Congruence Subgroups|$\Gamma_1(N)$]], the **diamond operator** $\langle d \rangle$ for $d \in (\mathbb{Z}/N\mathbb{Z})^*$ acts by:
> $$
> \langle d\rangle f=f|_k\gamma_d,\qquad
> (f|_k\gamma_d)(\tau)=(c\tau+d')^{-k}f\!\left(\frac{a\tau+b}{c\tau+d'}\right),
> $$
> where $\gamma_d=\begin{pmatrix}a&b\\c&d'\end{pmatrix}\in\Gamma_0(N)$ and $d'\equiv d\pmod N$. The quotient $\Gamma_0(N)/\Gamma_1(N)\simeq(\mathbb Z/N\mathbb Z)^*$ makes this independent of the representative. The weight factor is part of the definition. Extend $\langle n\rangle$ by zero for $\gcd(n,N)>1$.

## Hecke Algebra

> [!info] Definition
> The **Hecke algebra** $\mathbb{T}_k$ is the $\mathbb{C}$-algebra generated by all $T_n$ acting on $M_k$.

At general level include the diamond operators on $M_k(\Gamma_1(N))$; they act by scalars on a fixed-character subspace. Commutativity alone does not imply semisimplicity: bad-prime operators on oldspaces can have the Jordan behavior displayed above.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product|Petersson Inner Product]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The diamond action, prime Fourier formula, recursive Hecke relations and general Fourier formula were checked against Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, 2005, corrected fourth printing 2016: §5.2, printed pp. 168–171 / PDF pp. 182–185; §5.3, printed pp. 179–180 / PDF pp. 193–194. The normalization identity is formula (5.21), printed p. 196 / PDF p. 210. The adjoint and restricted spectral statements are proved in Theorems 5.5.3–5.5.4, printed p. 187 / PDF p. 201, using the finite-dimensional spectral theorem as a named linear-algebra input.

The linked exercise notes supply independent proofs of the generalized Eisenstein calculation, the normalized-coefficient implications and the oldspace counterexample. The full-level integral-sum formula is the double-coset specialization in the convention giving the displayed Fourier coefficients. Lang’s cited page, printed p. 319 / PDF p. 334, supplies the older Hecke-algebra and Deligne–Serre context; that page does not establish all these calculations.

An earlier version omitted the level and character hypotheses in the spectral claims and omitted the weight factor in the diamond action. Those claims have been corrected here. The `partially-verified` status distinguishes the audited source statements and linked independent proofs from the remaining contextual material.
