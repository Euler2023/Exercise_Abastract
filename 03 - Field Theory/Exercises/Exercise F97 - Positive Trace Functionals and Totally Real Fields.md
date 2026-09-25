---
title: "Exercise F97: Positive Trace Functionals and Totally Real Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - trace-forms
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 2, printed p. 461, PDF p. 476"
created: 2026-09-25
---

# Exercise F97: Positive Trace Functionals and Totally Real Fields

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 2
> Let $F$ be a finite extension of $\mathbb Q$. Let $\varphi:F\to\mathbb Q$ be a $\mathbb Q$-linear functional such that $\varphi(x^2)>0$ for all $x\in F$, $x\ne0$. Let $\alpha\in F$, $\alpha\ne0$. If $\varphi(\alpha x^2)\ge0$ for all $x\in F$, show that $\alpha$ is a sum of squares in $F$, and that $F$ is totally real, i.e. every embedding of $F$ in the complex numbers is contained in the real numbers.
>
> *Hint:* Use the fact that the trace gives an identification of $F$ with its dual space over $\mathbb Q$, and use the approximation theorem of Chapter XII, §1.

## Hints

> [!hint]- Hint 1
> Nondegeneracy of the trace pairing gives a unique $\beta\in F$ such that $\varphi(x)=\operatorname{Tr}_{F/\mathbb Q}(\beta x)$.

> [!hint]- Hint 2
> Extend the quadratic form $x\mapsto\varphi(x^2)$ continuously from the rational vector space $F$ to $F\otimes_{\mathbb Q}\mathbb R\cong\mathbb R^{r_1}\times\mathbb C^{r_2}$. A nonzero complex-coordinate term $2\operatorname{Re}(\tau(\beta)z^2)$ takes negative values.

> [!hint]- Hint 3
> Once all embeddings are real, test $\varphi(\alpha x^2)\ge0$ one coordinate at a time. Then apply the corrected positive-conjugate criterion from Exercise XI.1.

## Solution

> [!success]- Independently derived solution
> ### Trace representation and real completion
> Since $F/\mathbb Q$ is finite and separable, the trace pairing $(u,v)\mapsto\operatorname{Tr}_{F/\mathbb Q}(uv)$ is nondegenerate. Hence there is a unique $\beta\in F$ with
> $$
> \varphi(x)=\operatorname{Tr}_{F/\mathbb Q}(\beta x)\qquad(x\in F).
> $$
> The positivity hypothesis makes $\varphi\ne0$, so $\beta\ne0$.
>
> Let $r_1$ be the number of real embeddings and $r_2$ the number of conjugate pairs of nonreal embeddings. There is an isomorphism of real algebras
> $$
> F\otimes_{\mathbb Q}\mathbb R\cong\mathbb R^{r_1}\times\mathbb C^{r_2}.
> $$
> Under this isomorphism the continuous extension of $q(x)=\varphi(x^2)$ is
> $$
> q_{\mathbb R}(u_1,\ldots,u_{r_1},z_1,\ldots,z_{r_2})
> =\sum_{i=1}^{r_1}\sigma_i(\beta)u_i^2
> +2\sum_{j=1}^{r_2}\operatorname{Re}\!\bigl(\tau_j(\beta)z_j^2\bigr).
> $$
> The diagonal image of $F$ is dense in this real vector space: a $\mathbb Q$-basis of $F$ identifies it with $\mathbb Q^{[F:\mathbb Q]}$ inside $\mathbb R^{[F:\mathbb Q]}$. Since $q(x)>0$ for every nonzero $x\in F$, continuity implies $q_{\mathbb R}\ge0$ everywhere.
>
> If $r_2>0$, fix a complex coordinate $j$ and set all other coordinates to zero. Because $\beta\ne0$ and an embedding is injective, $\tau_j(\beta)\ne0$. Choose $z_j\in\mathbb C$ so that $\operatorname{Re}(\tau_j(\beta)z_j^2)<0$. This contradicts $q_{\mathbb R}\ge0$. Thus $r_2=0$, and every embedding of $F$ into $\mathbb C$ is real: $F$ is totally real. Testing the individual real coordinates now gives $\sigma_i(\beta)\ge0$. Injectivity and $\beta\ne0$ improve this to $\sigma_i(\beta)>0$ for all $i$.
>
> ### Positivity of $\alpha$
> Apply the same density argument to the continuous extension of $x\mapsto\varphi(\alpha x^2)$. It is nonnegative on $F\otimes_{\mathbb Q}\mathbb R$, so for every real embedding $\sigma_i$,
> $$
> \sigma_i(\beta\alpha)\ge0.
> $$
> Since $\sigma_i(\beta)>0$ and $\alpha\ne0$, every $\sigma_i(\alpha)>0$. In particular, every real embedding of $\mathbb Q(\alpha)$ extends to a real embedding of $F$: an embedding into $\mathbb C$ extends across the finite algebraic extension $F/\mathbb Q(\alpha)$, and all embeddings of $F$ are real. The corrected criterion of Exercise XI.1 therefore shows that $\alpha$ is a sum of squares already in $\mathbb Q(\alpha)$, hence in $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[03 - Field Theory/Exercises/Exercise F96 - Positive Conjugates and Sums of Squares|Exercise F96]]

## Notes

- **Source status:** The entire statement, its hint, the strict inequality $\varphi(x^2)>0$, and the weak inequality $\varphi(\alpha x^2)\ge0$ were visually checked at [S2, Ch. XI, Ex. 2, printed p. 461, PDF p. 476]. The proof here is independently derived.
- **Imported facts:** Nondegeneracy of the trace pairing for a finite separable extension and the real decomposition $F\otimes_{\mathbb Q}\mathbb R\cong\mathbb R^{r_1}\times\mathbb C^{r_2}$ are standard external inputs. Density of $\mathbb Q^n$ supplies the approximation step requested by the printed hint.
- **Ordering boundary:** The nonzero assumption on $\alpha$ is essential when passing from weak to strict positivity of its conjugates.
