---
title: "Exercise Gal90: Cyclic Degree Four Extensions and Quadratic Intermediate Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - cyclic-extensions
  - hilbert-90
  - automorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 6, printed p. 321, PDF p. 336"
created: 2026-09-12
---

# Exercise Gal90: Cyclic Degree Four Extensions and Quadratic Intermediate Fields

## Problem Statement

> [!question] Exercise VI.6
> (a) Let $K$ be cyclic over $k$ of degree 4, and of characteristic $\neq 2$. Let $G_{K/k} = \langle \sigma \rangle$. Let $E$ be the unique subfield of $K$ of degree 2 over $k$. Since $[K:E] = 2$, there exists $\alpha \in K$ such that $\alpha^2 = \gamma \in E$ and $K = E(\alpha)$. Prove that there exists $z \in E$ such that
> $$
> z\sigma z = -1, \quad \sigma\alpha = z\alpha, \quad z^2 = \sigma\gamma / \gamma.
> $$
>
> (b) Conversely, let $E$ be a quadratic extension of $k$ and let $G_{E/k} = \langle \tau \rangle$. Let $z \in E$ be an element such that $z\tau z = -1$. Prove that there exists $\gamma \in E$ such that $z^2 = \tau\gamma / \gamma$. Then $E = k(\gamma)$. Let $\alpha^2 = \gamma$, and let $K = k(\alpha)$. Show that $K$ is Galois, cyclic of degree 4 over $k$. Let $\sigma$ be an extension of $\tau$ to $K$. Show that $\sigma$ is an automorphism of $K$ which generates $G_{K/k}$, satisfying $\sigma^2\alpha = -\alpha$ and $\sigma\alpha = \pm z\alpha$. Replacing $z$ by $-z$ originally if necessary, one can then have $\sigma\alpha = z\alpha$.

## Hints

> [!hint]- Hint 1: Part (a) and Invariance under $\sigma^2$
> The unique subfield of degree 2 is $E = K^{\langle \sigma^2 \rangle}$. Since $[K:E] = 2$, the non-trivial automorphism of $K/E$ is $\sigma^2$, so $\sigma^2(\alpha) = -\alpha$. Define $z = \sigma(\alpha)/\alpha$, and check that $\sigma^2(z) = z$, which implies $z \in E$.

> [!hint]- Hint 2: Hilbert's Theorem 90 for Part (b)
> For the cyclic quadratic extension $E/k$, the hypothesis $z \tau z = -1$ implies that the norm of $z^2$ is $N_{E/k}(z^2) = (z\tau z)^2 = (-1)^2 = 1$. Apply Hilbert's Theorem 90 to find $\gamma \in E$ such that $z^2 = \tau\gamma / \gamma$.

> [!hint]- Hint 3: Generation and Order of $\sigma$
> Check that $\gamma$ cannot lie in $k$ (since $z^2 \neq 1$) and cannot be a square in $E$ (which would contradict $N_{E/k}(z) = -1$). Then show $\sigma^2(\alpha) = -\alpha$, ensuring $\sigma$ has order 4.

## Solution

> [!success]- Solution
>
> ### (a) Direct Direction: From $C_4$ Extension to $z \in E$
>
> Since $K/k$ is cyclic of degree 4 with Galois group $G_{K/k} = \langle \sigma \rangle$, the unique subgroup of order 2 is $\langle \sigma^2 \rangle$. Under the Galois correspondence, its fixed field is the unique quadratic subfield $E = K^{\langle \sigma^2 \rangle}$.
>
> Because $[K:E] = 2$ and $\operatorname{char}(k) \neq 2$, Kummer theory implies that $K = E(\alpha)$ with $\alpha^2 = \gamma \in E$, and $\alpha \notin E$. The non-trivial $E$-automorphism of $K$ is $\sigma^2$, which must send $\alpha \mapsto -\alpha$:
> $$
> \sigma^2(\alpha) = -\alpha.
> $$
>
> Now consider the ratio
> $$
> z = \frac{\sigma(\alpha)}{\alpha} \in K^\times.
> $$
> We verify that $z \in E$ by applying $\sigma^2$:
> $$
> \sigma^2(z) = \sigma^2\left(\frac{\sigma(\alpha)}{\alpha}\right) = \frac{\sigma^3(\alpha)}{\sigma^2(\alpha)} = \frac{\sigma(\sigma^2\alpha)}{-\alpha} = \frac{\sigma(-\alpha)}{-\alpha} = \frac{-\sigma(\alpha)}{-\alpha} = \frac{\sigma(\alpha)}{\alpha} = z.
> $$
> Since $\sigma^2(z) = z$, $z$ is fixed by $\langle \sigma^2 \rangle = \operatorname{Gal}(K/E)$, which proves that
> $$
> z \in E.
> $$
>
> By definition of $z$, we immediately have
> $$
> \sigma(\alpha) = z \alpha.
> $$
>
> Next, we compute $z \sigma(z)$:
> $$
> z \sigma(z) = \frac{\sigma(\alpha)}{\alpha} \cdot \sigma\left(\frac{\sigma(\alpha)}{\alpha}\right) = \frac{\sigma(\alpha)}{\alpha} \cdot \frac{\sigma^2(\alpha)}{\sigma(\alpha)} = \frac{\sigma^2(\alpha)}{\alpha} = \frac{-\alpha}{\alpha} = -1.
> $$
>
> Finally, squaring $z$ gives
> $$
> z^2 = \left(\frac{\sigma\alpha}{\alpha}\right)^2 = \frac{\sigma(\alpha^2)}{\alpha^2} = \frac{\sigma(\gamma)}{\gamma}.
> $$
> This establishes all three required relations for part (a).
>
> ---
>
> ### (b) Converse Direction: Constructing the $C_4$ Extension
>
> Let $E/k$ be a quadratic extension with $\operatorname{Gal}(E/k) = \langle \tau \rangle$, and let $z \in E$ satisfy $z \tau z = -1$.
>
> 1. **Existence of $\gamma$:**
>    Consider the norm $N_{E/k}(z^2) \in k$:
>    $$
>    N_{E/k}(z^2) = z^2 \tau(z^2) = (z \tau z)^2 = (-1)^2 = 1.
>    $$
>    Since $E/k$ is a finite cyclic extension and $N_{E/k}(z^2) = 1$, [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]] guarantees the existence of an element $\gamma \in E^\times$ such that
>    $$
>    z^2 = \frac{\tau(\gamma)}{\gamma}.
>    $$
>
> 2. **$E = k(\gamma)$:**
>    If $\gamma \in k$, then $\tau(\gamma) = \gamma$, so $z^2 = 1$, which means $z = \pm 1$.
>    Then $z \tau z = (\pm 1)^2 = 1$. But $z \tau z = -1$, and in characteristic $\neq 2$, $1 \neq -1$.
>    Contradiction! Thus $\gamma \notin k$, and since $[E:k] = 2$, we have $E = k(\gamma)$.
>
> 3. **Degree of $K = k(\alpha)$ over $E$:**
>    Let $\alpha$ be a root of $X^2 - \gamma$, so $\alpha^2 = \gamma$, and $K = k(\alpha) = E(\alpha)$.
>    We show that $\gamma$ is not a square in $E$. Indeed, if $\gamma = \beta^2$ for some $\beta \in E$, then
>    $$
>    z^2 = \frac{\tau(\beta^2)}{\beta^2} = \left(\frac{\tau(\beta)}{\beta}\right)^2 \implies z = \pm \frac{\tau(\beta)}{\beta}.
>    $$
>    Then
>    $$
>    z \tau z = \left(\pm \frac{\tau\beta}{\beta}\right) \tau\left(\pm \frac{\tau\beta}{\beta}\right) = \frac{\tau\beta}{\beta} \cdot \frac{\beta}{\tau\beta} = 1,
>    $$
>    contradicting $z \tau z = -1$. Thus $\gamma \notin E^2$, which proves that $[K:E] = 2$ and $[K:k] = 4$.
>
> 4. **Automorphism $\sigma$ and Cyclicity:**
>    Let $\sigma: K \to \overline{k}$ be an embedding extending $\tau$ on $E$.
>    Then
>    $$
>    (\sigma\alpha)^2 = \sigma(\alpha^2) = \sigma(\gamma) = \tau(\gamma) = z^2 \gamma = z^2 \alpha^2 = (z\alpha)^2.
>    $$
>    Hence $\sigma(\alpha) = \pm z \alpha \in K$.
>    Because $z \in E \subset K$ and $\alpha \in K$, $\sigma(K) \subseteq K$. Thus $\sigma$ is a $k$-automorphism of $K$, and $K/k$ is normal (hence Galois, as $\operatorname{char}(k) \neq 2$).
>
>    If originally $\sigma(\alpha) = -z\alpha$, we replace $z$ by $-z$. Note that $(-z)\tau(-z) = z\tau z = -1$ and $(-z)^2 = z^2 = \tau\gamma/\gamma$, so all conditions remain satisfied. With this choice,
>    $$
>    \sigma(\alpha) = z \alpha.
>    $$
>
>    Now we compute $\sigma^2(\alpha)$:
>    $$
>    \sigma^2(\alpha) = \sigma(z\alpha) = \sigma(z)\sigma(\alpha) = \tau(z)(z\alpha) = (\tau(z)z)\alpha = (-1)\alpha = -\alpha.
>    $$
>    Since $\operatorname{char}(k) \neq 2$ and $\alpha \neq 0$, $-\alpha \neq \alpha$, so $\sigma^2 \neq \operatorname{id}_K$.
>    Applying $\sigma$ twice more:
>    $$
>    \sigma^4(\alpha) = \sigma^2(-\alpha) = -(-\alpha) = \alpha.
>    $$
>    Since $\sigma^2|_E = \tau^2 = \operatorname{id}_E$ and $\sigma^4(\alpha) = \alpha$, $\sigma^4 = \operatorname{id}_K$.
>    Thus $\sigma$ has order 4 in $\operatorname{Gal}(K/k)$. Since $[K:k] = 4$, $\operatorname{Gal}(K/k) = \langle \sigma \rangle \cong C_4 \cong \mathbb Z/4\mathbb Z$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Routing:** Galois Theory is primary because the classification of cyclic quartics over a quadratic base via norm conditions is a central constructive application of Hilbert's Theorem 90.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 6, printed p. 321, PDF p. 336.
