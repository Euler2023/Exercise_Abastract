---
title: "Exercise MF5: Fourier Coefficient Relations for Normalized Eigenforms"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 5, §5.8, Exercise 5.8.7, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-7"
created: 2026-01-19
---

# Exercise MF5: Fourier Coefficient Relations for Normalized Eigenforms

## Problem Statement

> [!question] Original Exercise 5.8.7
> **Complete original Exercise 5.8.7:** Prove $(\Longrightarrow)$ in Proposition 5.8.5.
>
> The required direction of the cited proposition is expanded here to make the problem self-contained. Let $N\ge1$, $k\ge1$, let $\chi$ be a Dirichlet character modulo $N$, and let $f\in M_k(N,\chi)$ be a normalized Hecke eigenform. Write
> $$
> f(\tau)=\sum_{n\ge0}a_n(f)q^n,\qquad q=e^{2\pi i\tau}.
> $$
> Prove the following three conditions:
>
> (1) $a_1(f)=1$;
>
> (2) for every prime $p$ and integer $r\ge2$,
> $$
> a_{p^r}(f)=a_p(f)a_{p^{r-1}}(f)-\chi(p)p^{k-1}a_{p^{r-2}}(f);
> $$
>
> (3) for all coprime positive integers $m,n$,
> $$
> a_{mn}(f)=a_m(f)a_n(f).
> $$
> The character is extended by $0$ at integers not coprime to $N$. Proposition 5.8.5 is on printed p. 199 / PDF p. 213. This exercise asks for the stated direction only, not its converse.

## Hints

> [!hint]- Hint 1 — first Fourier coefficient
> Use the coefficient formula for general $T_n$ in Proposition 5.3.1 to compute $a_1(T_nf)$. The formula for a prime-indexed operator $T_p$ does not itself give the formula for general $T_n$.

> [!hint]- Hint 2 — operator identities
> First use normalization to obtain $T_nf=a_n(f)f$. Then take eigenvalues in $T_{p^r}=T_pT_{p^{r-1}}-p^{k-1}\langle p\rangle T_{p^{r-2}}$ and, for coprime indices, in $T_{mn}=T_mT_n$.

> [!hint]- Hint 3 — primes dividing the level
> If $p\mid N$, then $\langle p\rangle=0$ and $\chi(p)=0$, so the recurrence still applies. Condition (1) is part of the definition of normalization.

## Solution

> [!success]- Independent solution
> This is an independent derivation. The proved source inputs are Proposition 5.3.1 and formula (5.14) (printed pp. 180–181 / PDF pp. 194–195), together with the operator definitions and coprime multiplication relation in §5.3 (printed p. 179 / PDF p. 193). The forward direction of Proposition 5.8.5, which is the claim to be proved, is not used as an input.
>
> **Step 1: identify the eigenvalue for every $n\ge1$.** Write $T_nf=\lambda_nf$. By Definition 5.8.1, normalization means $a_1(f)=1$, so condition (1) already holds. The general coefficient formula is
> $$
> a_j(T_nf)=\sum_{d\mid\gcd(j,n)}\chi(d)d^{k-1}a_{jn/d^2}(f).
> $$
> Set $j=1$. The only divisor in the sum is $d=1$, giving
> $$
> a_1(T_nf)=a_n(f).
> $$
> On the other hand, $a_1(T_nf)=\lambda_na_1(f)=\lambda_n$. Thus every positive integer $n$, including indices not coprime to the level, satisfies
> $$
> \lambda_n=a_n(f),\qquad T_nf=a_n(f)f.
> $$
>
> **Step 2: the prime-power recurrence.** Section 5.3 defines $T_1=1$ and, for $r\ge2$,
> $$
> T_{p^r}=T_pT_{p^{r-1}}-p^{k-1}\langle p\rangle T_{p^{r-2}}.
> $$
> On $M_k(N,\chi)$, we have $\langle p\rangle f=\chi(p)f$; both sides vanish if $p\mid N$. Apply the operator identity to $f$ and use Step 1:
> $$
> \begin{aligned}
> a_{p^r}(f)f
> &=a_p(f)a_{p^{r-1}}(f)f
> -p^{k-1}\chi(p)a_{p^{r-2}}(f)f.
> \end{aligned}
> $$
> Since $f\ne0$, equality of the scalar coefficients gives condition (2). When $r=2$, the last term uses $a_{p^0}=a_1=1$; when $p\mid N$, the recurrence becomes $a_{p^r}=a_pa_{p^{r-1}}$.
>
> **Step 3: coprime multiplicativity.** Let $\gcd(m,n)=1$. The relation $T_{mn}=T_mT_n$ from §5.3 gives
> $$
> \begin{aligned}
> a_{mn}(f)f
> &=T_{mn}f=T_m(T_nf)\\
> &=T_m(a_n(f)f)=a_n(f)a_m(f)f.
> \end{aligned}
> $$
> Using $f\ne0$ once more proves condition (3). This proves all three conditions in the required direction. No assumption that $f$ is a cusp form or a newform is needed.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Exercises/Exercise MF13 - Hecke Eigenvalues of Generalized Eisenstein Series|Exercise MF13 - Hecke Eigenvalues of Generalized Eisenstein Series]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA581 - Three Eigenforms in a Four Dimensional Oldspace|Exercise LA581 - Three Eigenforms in a Four Dimensional Oldspace]]

## Notes

- The original exercise is a one-line reference; all three conditions in the referenced implication have been expanded in the statement. The book leaves this direction as an exercise. The solution above is an independent derivation.
- Source/proof status: the exercise, Proposition 5.8.5, and the coefficient formula were checked against rendered pages of the original PDF. The solution is independently derived.

- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]]. This note counts only as original Exercise 5.8.7.
