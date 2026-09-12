---
title: "Exercise Gal124: Division Groups and Kummer Degrees of Finitely Generated Subgroups"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - kummer-theory
  - division-groups
  - radical-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 40, printed p. 328, PDF p. 343"
created: 2026-09-12
---

# Exercise Gal124: Division Groups and Kummer Degrees of Finitely Generated Subgroups

## Problem Statement

> [!question]
> Let $K$ be a field and $p$ a prime number not equal to the characteristic of $K$. Let $\Gamma$ be a finitely generated subgroup of $K^*$, and assume that $\Gamma$ is equal to its own $p$-division group in $K$, that is if $z \in K$ and $z^p \in \Gamma$, then $z \in \Gamma$. If $p$ is odd, assume that $\boldsymbol{\mu}_p \subset K$, and if $p = 2$, assume that $\boldsymbol{\mu}_4 \subset K$. Let
> $$
> (\Gamma : \Gamma^p) = p^{r+1}.
> $$
> Show that $\Gamma^{1/p}$ is its own $p$-division group in $K(\Gamma^{1/p})$, and
> $$
> [K(\Gamma^{1/p^m}) : K] = p^{m(r+1)}
> $$
> for all positive integers $m$.

## Hints

> [!hint]- Weak Hint
> Proceed by induction on $m$. The base case $m = 1$ is an immediate consequence of Kummer theory because $\boldsymbol{\mu}_p \subset K$ and $\Gamma \cap K^{*p} = \Gamma^p$.

> [!hint]- Moderate Hint
> Let $K_1 = K(\Gamma^{1/p})$ and $\Gamma_1 = \Gamma^{1/p} \subset K_1^*$. Show that $(\Gamma_1 : \Gamma_1^p) = (\Gamma^{1/p} : \Gamma) = (\Gamma : \Gamma^p) = p^{r+1}$. To show that $\Gamma_1$ is its own $p$-division group in $K_1$, consider an element $u \in K_1$ such that $u^p \in \Gamma_1$.

> [!hint]- Strong Hint
> If $u \in K_1$ and $u^p \in \Gamma_1$, then $u^{p^2} \in \Gamma \subset K$. The field $K(u)$ is a cyclic extension of $K$ of degree dividing $p^2$. Use Kummer theory: an element of $K_1$ whose $p$-th power lies in $K^*$ must lie in $K^* \cdot \Gamma^{1/p}$. When $p = 2$, the condition $\boldsymbol{\mu}_4 \subset K$ guarantees that cyclic extensions of degree 4 over $K$ behave predictably without non-cyclic collapse.

## Solution

> [!success]- Complete Derivation
> Let $K$ be a field of characteristic $\ne p$. We are given:
> - $\boldsymbol{\mu}_p \subset K$ if $p$ is odd; $\boldsymbol{\mu}_4 \subset K$ if $p = 2$;
> - $\Gamma \le K^*$ is finitely generated and $p$-pure in $K$: $z \in K, z^p \in \Gamma \implies z \in \Gamma$;
> - $(\Gamma : \Gamma^p) = p^{r+1}$.
>
> ---
>
> ### 1. The Base Extension $K_1 = K(\Gamma^{1/p})$
> Since $\Gamma$ is a finitely generated abelian group, $\Gamma \cong \mathbf{Z}^s \times T$ where $T$ is a finite cyclic torsion group (roots of unity in $K$).
> The quotient $\Gamma / \Gamma^p$ is a finite-dimensional $\mathbf{F}_p$-vector space of dimension $r + 1$.
>
> Consider the subgroup $\Delta = \Gamma K^{*p} \le K^*$.
> Since $\Gamma$ is its own $p$-division group in $K$, we have:
> $$
> \Gamma \cap K^{*p} = \{z^p \in \Gamma \mid z \in K\} = \Gamma^p.
> $$
> By the second isomorphism theorem:
> $$
> \Delta / K^{*p} = \Gamma K^{*p} / K^{*p} \cong \Gamma / (\Gamma \cap K^{*p}) = \Gamma / \Gamma^p.
> $$
> Since $K$ contains $\boldsymbol{\mu}_p$, standard Kummer theory implies that the extension $K_1 = K(\Gamma^{1/p}) = K(\Delta^{1/p})$ is an abelian Galois extension of exponent $p$, with Galois group
> $$
> \operatorname{Gal}(K_1/K) \cong \operatorname{Hom}(\Delta / K^{*p}, \boldsymbol{\mu}_p) \cong (\mathbf{Z}/p\mathbf{Z})^{r+1}.
> $$
> In particular, its degree is:
> $$
> [K_1 : K] = |\Delta / K^{*p}| = (\Gamma : \Gamma^p) = p^{r+1}.
> $$
>
> ---
>
> ### 2. The $p$-Division Property of $\Gamma^{1/p}$ in $K_1$
> Let $\Gamma_1 = \Gamma^{1/p} \subset K_1^*$.
> We must prove that $\Gamma_1$ is its own $p$-division group in $K_1$:
> $$
> \text{if } u \in K_1 \text{ and } u^p \in \Gamma_1, \text{ then } u \in \Gamma_1.
> $$
>
> Suppose $u \in K_1$ satisfies $u^p \in \Gamma_1$.
> Then
> $$
> (u^p)^p = u^{p^2} \in \Gamma_1^p = \Gamma \subset K.
> $$
> Let $w = u^{p^2} \in \Gamma$.
>
> 1. **Kummer Subgroup of $K_1$:**
>    By Kummer theory for $K_1/K$, the group of elements in $K_1^*$ whose $p$-th power belongs to $K^*$ is precisely
>    $$
>    K^* \cdot \Gamma^{1/p} = K^* \cdot \Gamma_1.
>    $$
>    Since $u^p \in \Gamma_1 \subset K_1^*$, and $(u^p)^p = w \in K^*$, $u^p$ already lies in $\Gamma_1$.
>    Now consider $u \in K_1$. Its $p$-th power $u^p$ lies in $K^* \cdot \Gamma_1$ (indeed, directly in $\Gamma_1$).
>    Does $u^p \in K^*$?
>    If $u^p \in K^*$, then since $u \in K_1$, Kummer theory implies $u \in K^* \cdot \Gamma_1$.
>    Then $u = c \cdot \gamma_1$ with $c \in K^*$ and $\gamma_1 \in \Gamma_1$.
>    Then $u^p = c^p \gamma_1^p = c^p \gamma$ with $\gamma = \gamma_1^p \in \Gamma$.
>    Since $u^p \in \Gamma_1 \implies u^{p^2} = c^{p^2} \gamma^p \in \Gamma$.
>    Since $\gamma^p \in \Gamma$, this implies $c^{p^2} \in \Gamma$.
>    Since $\Gamma$ is its own $p$-division group in $K$, $c^{p^2} \in \Gamma \implies c \in \Gamma$.
>    Then $u = c \gamma_1 \in \Gamma \cdot \Gamma_1 = \Gamma_1$.
>
> 2. **The General Case:**
>    More generally, consider the cyclic extension $K(u)/K$.
>    Since $u \in K_1$ and $\operatorname{Gal}(K_1/K)$ has exponent $p$, the degree $[K(u) : K]$ must divide the exponent of $\operatorname{Gal}(K_1/K)$, so $[K(u) : K] \le p$.
>    On the other hand, $u^{p^2} = w \in \Gamma \subset K$.
>    If $u \notin \Gamma_1$, then $u^p \notin \Gamma$, so $w = u^{p^2}$ is not a $p$-th power in $\Gamma$.
>    Since $\Gamma$ is $p$-pure in $K$, $w$ is not a $p$-th power in $K$.
>    Thus the polynomial $X^{p^2} - w$ has degree $p^2$.
>    - For $p$ odd: Since $\boldsymbol{\mu}_p \subset K$, if $w \notin K^{*p}$, then $X^{p^2} - w$ is irreducible over $K$, so $[K(u) : K] = p^2$.
>      This contradicts $[K(u) : K] \le p$!
>    - For $p = 2$: Since $\boldsymbol{\mu}_4 \subset K$ (so $-1$ is a square and $\pm i \in K$), if $w \notin K^{*2}$, then $w \notin -4 K^{*4}$. By the standard criterion for irreducibility of binomials $X^4 - w$, $X^4 - w$ is irreducible over $K$, so $[K(u) : K] = 4 = 2^2$.
>      This again contradicts $[K(u) : K] \le 2$!
>
> Therefore, no such element $u \notin \Gamma_1$ can exist.
> We conclude that
> $$
> u \in \Gamma_1 = \Gamma^{1/p}.
> $$
> Thus $\Gamma^{1/p}$ is equal to its own $p$-division group in $K_1 = K(\Gamma^{1/p})$.
>
> ---
>
> ### 3. Index of the Division Group
> The group homomorphism $x \mapsto x^p$ maps $\Gamma^{1/p} \to \Gamma$ surjectively, with kernel $\boldsymbol{\mu}_p \cap \Gamma^{1/p}$.
> Since $\boldsymbol{\mu}_p \subset K$ (or $\boldsymbol{\mu}_4 \subset K$), any $p$-th root of unity in $\Gamma^{1/p}$ has its $p$-th power equal to 1, which is in $\Gamma$, so by the division group property it was already in $\Gamma$.
> Therefore, the torsion subgroups match, and the map induces an isomorphism:
> $$
> \Gamma^{1/p} / (\Gamma^{1/p})^p = \Gamma^{1/p} / \Gamma \cong \Gamma / \Gamma^p.
> $$
> In particular:
> $$
> (\Gamma_1 : \Gamma_1^p) = (\Gamma : \Gamma^p) = p^{r+1}.
> $$
>
> ---
>
> ### 4. Induction on $m$
> Define the sequence of fields and groups inductively:
> $$
> K_0 = K, \quad \Gamma_0 = \Gamma,
> $$
> and for each $j \ge 1$:
> $$
> K_j = K_{j-1}(\Gamma_{j-1}^{1/p}) = K(\Gamma^{1/p^j}), \quad \Gamma_j = \Gamma_{j-1}^{1/p} = \Gamma^{1/p^j}.
> $$
> By steps 1–3, the inductive hypotheses hold at each stage:
> 1. $\Gamma_j$ is equal to its own $p$-division group in $K_j$;
> 2. $(\Gamma_j : \Gamma_j^p) = p^{r+1}$;
> 3. $K_{j+1} / K_j$ is a Kummer extension with
>    $$
>    [K_{j+1} : K_j] = (\Gamma_j : \Gamma_j^p) = p^{r+1}.
>    $$
>
> Applying the tower property for the tower $K = K_0 \subseteq K_1 \subseteq K_2 \subseteq \dots \subseteq K_m = K(\Gamma^{1/p^m})$:
> $$
> [K(\Gamma^{1/p^m}) : K] = \prod_{j=0}^{m-1} [K_{j+1} : K_j] = \prod_{j=0}^{m-1} p^{r+1} = (p^{r+1})^m = p^{m(r+1)}.
> $$
> This holds for all positive integers $m$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]

## Notes

- The hypothesis $\boldsymbol{\mu}_4 \subset K$ for $p = 2$ is strictly necessary: over $\mathbf{Q}$, $2$ is its own 2-division group in $\mathbf{Q}$, and $(\langle 2 \rangle : \langle 4 \rangle) = 2^1$. But $\mathbf{Q}(2^{1/4}) = \mathbf{Q}(\sqrt[4]{2})$ contains $\sqrt{2}$, and $[\mathbf{Q}(2^{1/4}) : \mathbf{Q}] = 4 = 2^2$, but over $\mathbf{Q}(\sqrt{2})$, adjoining $\sqrt{-1}$ shows the failure of Kummer theory without roots of unity.
- This theorem provides the foundation for the study of $\ell$-adic representations attached to points on algebraic groups and abelian varieties (Bashmakov, Ribet, Serre).
