---
title: 'Exercise R396: An Explicit Lubin Tate Logarithm'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 4, printed p. 345, PDF p. 364
source_refs:
- S4/ch-V/sec-4/ex-4
created: '2026-10-23'
---

# Exercise R396: An Explicit Lubin Tate Logarithm

## Problem Statement

> [!question] Neukirch V.4.4
> Let $\pi$ be a prime element of the local field $K$, and let $f(X)=X+\pi^{-1}X^q+\pi^{-2}X^{q^2}+\cdots$. Then
> $$
> F(X,Y)=f^{-1}(f(X)+f(Y)),\qquad [a]_F(X)=f^{-1}(af(X)),\quad a\in\mathfrak o_K,
> $$
> defines a Lubin–Tate module with logarithm $\log_F=f$.

## Hints

> [!hint]- Hint 1
> The identities over $K$ follow from conjugation by $f$. The essential work is proving that all coefficients are integral.

> [!hint]- Hint 2
> Use $\pi f(X)=\pi X+f(X^q)$. If integral series $U,V$ have zero constant and $U-V\in\pi\mathfrak o[[X]]$, then $U^{q^j}-V^{q^j}\in\pi^{j+1}\mathfrak o[[X]]$.

> [!hint]- Hint 3
> Induct on total degree in $\pi(F-X-Y)=f(F(X^q,Y^q))-f(F(X,Y)^q)$, then do the same for $[a]_F$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $\mathfrak o=\mathfrak o_K$, with residue field $\mathbb F_q$. All series substitutions are formal and have zero constant term. The linear coefficient of $f$ is $1$, so $f^{-1}\in K[[X]]$ exists. Over $K$, conjugation immediately gives a commutative associative formal group and scalar maps. We prove the missing integral assertions.
>
> **An integral difference lemma.** For integral zero-constant series $U,V$ with $U-V\in\pi\mathfrak o[[\mathbf X]]$, one has
> $$
> U^{q^j}-V^{q^j}\in\pi^{j+1}\mathfrak o[[\mathbf X]]\quad(j\ge0).
> $$
> Indeed, raising two congruent elements modulo $\pi^r$ to the $q$th power improves the congruence to $\pi^{r+1}$ for $r\ge1$. In the binomial expansion the middle binomial coefficients are divisible by the residue characteristic, the linear coefficient $q$ is also so divisible, and the last term has valuation at least $qr\ge r+1$. In equal characteristic the intermediate terms vanish and the same conclusion holds. Consequently
> $$
> f(U)-f(V)=\sum_{j\ge0}\pi^{-j}(U^{q^j}-V^{q^j})\in\pi\mathfrak o[[\mathbf X]].
> $$
> Each coefficient uses only finitely many summands.
>
> **Integrality of $F$.** The functional identity $\pi f(T)=\pi T+f(T^q)$ and $f(F)=f(X)+f(Y)$ give
> $$
> \pi(F-X-Y)=f(F(X^q,Y^q))-f(F(X,Y)^q).
> $$
> Suppose by induction that the coefficients of $F$ below total degree $d$ are integral. The degree-$d$ coefficient on the right depends only on those lower-degree coefficients, because every occurrence of $F$ there has its argument or its value raised to a power at least $q\ge2$. Let $P$ be the integral truncation below degree $d$. Over the residue field $\mathbb F_q$,
> $$
> P(X^q,Y^q)\equiv P(X,Y)^q\pmod\pi.
> $$
> The difference lemma shows that the degree-$d$ coefficient of the right side is in $\pi\mathfrak o$. Division by the initial $\pi$ therefore gives an integral degree-$d$ coefficient of $F$. Its initial linear part is $X+Y$, completing the induction.
>
> **Integrality of scalars.** For $H=[a]_F$ we have $f(H)=af(X)$ and hence
> $$
> \pi(H-aX)=f(H(X^q))-f(H(X)^q).
> $$
> The same induction applies, since every integral coefficient $c$ has $c^q\equiv c\pmod\pi$. Thus $[a]_F\in\mathfrak o[[X]]$ for every $a\in\mathfrak o$. All scalar addition, multiplication and compatibility identities already hold over $K$ by applying the injective substitution $f$, so they also hold over $\mathfrak o$.
>
> Finally set $H=[\pi]_F$. The functional equation gives $f(H)-f(X^q)=\pi X$. We claim that integral zero-constant $U,V$ satisfy
> $$
> f(U)-f(V)\in\pi\mathfrak o[[X]]\ \Longrightarrow\ U-V\in\pi\mathfrak o[[X]].
> $$
> Induct on degree: if earlier coefficients of $U-V$ are divisible by $\pi$, all higher-power contributions $\pi^{-j}(U^{q^j}-V^{q^j})$ in the next degree are divisible by $\pi$ by the difference lemma applied to truncations. The remaining contribution is precisely that coefficient of $U-V$, so it too is divisible by $\pi$. Apply this to $H,X^q$ to obtain $[\pi]_F(X)\equiv X^q\pmod\pi$. Its linear coefficient is $\pi$, proving the Lubin–Tate condition.
>
> By construction $f(F(X,Y))=f(X)+f(Y)$ and $f(X)\equiv X\pmod{\deg2}$, so $f$ is the stated logarithm over $K$. When $q=2$, comparison through degree two gives $F(X,Y)=X+Y-2\pi^{-1}XY+\cdots$; the coefficient is integral because $2\in\pi\mathfrak o$, matching the general proof.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The full logarithm, both conjugation formulas and the stated scalar range were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 4, printed p. 345, PDF p. 364]. The formal $\mathfrak o$-module and Lubin–Tate definitions were checked at [printed pp. 343–344, PDF pp. 362–363].
- **Proof scope:** Independent coefficient induction, including integrality and the Frobenius reduction. The exercise is not reduced to an unproved integrality lemma; the required difference lemma and its reverse implication are proved above. Formal identities do not assert analytic convergence at arbitrary elements of $K$.
