---
title: "Exercise Gal112: Algebraic Closure Criterion from Roots of Base Polynomials"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - field-extensions
  - algebraic-closure
  - primitive-element-theorem
  - purely-inseparable-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 28, printed p. 325, PDF p. 340"
created: 2026-09-12
---

# Exercise Gal112: Algebraic Closure Criterion from Roots of Base Polynomials

## Problem Statement

> [!question] Exercise VI.28
> Let $E$ be an algebraic extension of $k$ such that every non-constant polynomial $f(X)$ in $k[X]$ has at least one root in $E$. Prove that $E$ is algebraically closed.
>
> [Hint: Discuss the separable and purely inseparable cases separately, and use the primitive element theorem.]

## Hints

> [!hint]- Hint 1: Separable Extensions of $k$ Embed in $E$
> For any finite separable extension $L/k$, apply the primitive element theorem to write $L = k(\theta)$. Use the minimal polynomial of $\theta$ in $k[X]$ to construct an embedding of $L$ into $E$.

> [!hint]- Hint 2: Galois Closures Lie in $E$
> If $L/k$ is a finite separable extension, its Galois closure $M/k$ is also finite and separable over $k$. Deduce that $M \subseteq E$, and therefore every irreducible separable polynomial in $k[X]$ splits completely in $E$.

> [!hint]- Hint 3: Radicals and the Purely Inseparable Step
> For characteristic $p > 0$, if $\gamma \in E$ has minimal polynomial $h(X) \in k[X]$, apply the hypothesis to the polynomial $h(X^p) \in k[X]$ to show that every element of $E$ has a $p$-th root in $E$.

## Solution

> [!success]- Solution
>
> Let $E/k$ be an algebraic extension such that every non-constant polynomial $f(X) \in k[X]$ has at least one root in $E$.
> We must show that $E$ is algebraically closed; that is, every non-constant polynomial $P(X) \in E[X]$ has a root in $E$.
>
> ### 1. Every Finite Separable Extension of $k$ Embeds in $E$
>
> Let $L/k$ be any finite separable field extension.
> By the **Primitive Element Theorem**, there exists an element $\theta \in L$ such that
> $$
> L = k(\theta).
> $$
> Let $g(X) = \operatorname{Irr}(\theta, k, X) \in k[X]$ be the minimal polynomial of $\theta$ over $k$.
> By hypothesis, $g(X)$ has at least one root $\theta' \in E$.
> The evaluation homomorphism $\theta \mapsto \theta'$ defines a $k$-algebra embedding:
> $$
> \iota: L = k(\theta) \longleftrightarrow E.
> $$
>
> Now let $N/k$ be the **Galois closure** of $L$ over $k$.
> Since $L/k$ is finite and separable, $N/k$ is also a finite separable extension of $k$.
> Applying the primitive element theorem to $N/k$, there exists an embedding of $N$ into $E$ over $k$.
> Because $N/k$ is normal, any $k$-embedding of $N$ into an algebraic closure $k^a$ has the same image.
> Identifying $E$ inside a fixed algebraic closure $k^a$, this implies:
> $$
> N \subseteq E.
> $$
> In particular, because $L \subseteq N$, we have $L \subseteq E$.
>
> As a consequence:
> > Every irreducible separable polynomial in $k[X]$ splits completely into linear factors in $E$.
>
> ---
>
> ### 2. Closure under $p$-th Roots (Characteristic $p > 0$)
>
> Assume $\operatorname{char}(k) = p > 0$.
> Let $\gamma \in E$. We show that there exists $\delta \in E$ such that $\delta^p = \gamma$.
>
> Let $h(X) = \operatorname{Irr}(\gamma, k, X) \in k[X]$ be the minimal polynomial of $\gamma$ over $k$.
> Consider the composite polynomial
> $$
> H(X) = h(X^p) \in k[X].
> $$
> Because $h$ has coefficients in $k$, $H(X)$ also has coefficients in $k$.
> By hypothesis, $H(X)$ has at least one root $\beta \in E$:
> $$
> H(\beta) = h(\beta^p) = 0.
> $$
> Thus $\beta^p \in E$ is a root of $h(X)$.
>
> Let $h_{\text{sep}}(X)$ be the separable part of $h(X)$.
> By Section 1, the Galois closure of the splitting field of $h(X)$ over $k$ is contained in $E$.
> Since $h(X)$ is irreducible over $k$, the Galois group over $k$ acts transitively on the roots of $h(X)$ in $E$.
> In particular, there exists a $k$-automorphism of the normal closure inside $E$ mapping $\beta^p$ to $\gamma$.
> Applying this automorphism to $\beta$ gives an element $\delta \in E$ satisfying
> $$
> \delta^p = \gamma.
> $$
> By induction, $E$ contains all $p^m$-th roots of every element of $E$:
> $$
> E^{p^{-\infty}} = E.
> $$
>
> ---
>
> ### 3. Arbitrary Polynomials over $E$ Split
>
> Let $P(X) \in E[X]$ be a non-constant polynomial, and let $\alpha \in k^a$ be a root of $P(X)$ in an algebraic closure.
> The coefficients of $P(X)$ generate a finite extension $k_0 \subset E$ of $k$.
> Since $\alpha$ is a root of $P(X) \in k_0[X]$, $[k_0(\alpha) : k_0] \le \deg P < \infty$.
> Since $k_0/k$ is algebraic, the field extension $k(\alpha)/k$ is finite.
>
> We decompose the finite extension $k(\alpha)/k$ into its separable and purely inseparable parts:
> $$
> k \subseteq k(\alpha)_{\text{sep}} \subseteq k(\alpha).
> $$
> 1. By Section 1, every finite separable extension of $k$ is contained in $E$.
>    Therefore,
>    $$
>    k(\alpha)_{\text{sep}} \subseteq E.
>    $$
> 2. The extension $k(\alpha) / k(\alpha)_{\text{sep}}$ is purely inseparable.
>    - If $\operatorname{char}(k) = 0$, every algebraic extension is separable, so $k(\alpha) = k(\alpha)_{\text{sep}} \subseteq E$, which means $\alpha \in E$.
>    - If $\operatorname{char}(k) = p > 0$, there exists an integer $m \ge 0$ such that
>      $$
>      \alpha^{p^m} \in k(\alpha)_{\text{sep}} \subseteq E.
>      $$
>      By Section 2, $E$ is closed under taking $p$-th roots.
>      Taking $p$-th roots $m$ times inside $E$, we conclude that $\alpha \in E$.
>
> In all cases, $\alpha \in E$.
> Thus every non-constant polynomial $P(X) \in E[X]$ has a root in $E$.
>
> Therefore, $E$ is algebraically closed.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Routing:** Galois Theory is primary because reducing the algebraic closure criterion from base polynomial roots to full algebraic closure uses the Primitive Element Theorem and Galois closures.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 28, printed p. 325, PDF p. 340.
