---
title: "Exercise Gal99: Normalizer of an Intermediate Field in the Galois Group"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - galois-correspondence
  - normalizer
  - intermediate-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 15, printed p. 323, PDF p. 338"
created: 2026-09-12
---

# Exercise Gal99: Normalizer of an Intermediate Field in the Galois Group

## Problem Statement

> [!question] Exercise VI.15
> Let $K/k$ be a Galois extension, and let $F$ be an intermediate field between $k$ and $K$. Let $H$ be the subgroup of $\operatorname{Gal}(K/k)$ mapping $F$ into itself. Show that $H$ is the normalizer of $\operatorname{Gal}(K/F)$ in $\operatorname{Gal}(K/k)$.

## Hints

> [!hint]- Hint 1: Conjugate Subgroups and Conjugate Fields
> For any $\sigma \in \operatorname{Gal}(K/k)$, determine the subgroup of $K$-automorphisms fixing the image field $\sigma(F)$. Verify that
> $$
> \operatorname{Gal}(K/\sigma(F)) = \sigma \operatorname{Gal}(K/F) \sigma^{-1}.
> $$

> [!hint]- Hint 2: Surjectivity of $\sigma$ on $F$
> Show that if $\sigma(F) \subseteq F$, then necessarily $\sigma(F) = F$. For finite extensions, use vector space dimensions. For general algebraic extensions, use the fact that each element of $F$ has only finitely many conjugates in $F$.

## Solution

> [!success]- Solution
>
> Let $G = \operatorname{Gal}(K/k)$, and let $J = \operatorname{Gal}(K/F) = \{\tau \in G : \tau(x) = x \text{ for all } x \in F\}$.
> By definition, the set of automorphisms mapping $F$ into itself is
> $$
> H = \{\sigma \in G : \sigma(F) \subseteq F\}.
> $$
> We seek to show that $H = N_G(J)$, where $N_G(J) = \{\sigma \in G : \sigma J \sigma^{-1} = J\}$.
>
> ### 1. Conjugate Subgroups and Field Images
>
> For any $\sigma \in G$, consider the subfield $\sigma(F) \subseteq K$.
> An automorphism $\tau \in G$ fixes $\sigma(F)$ pointwise if and only if for all $x \in F$,
> $$
> \tau(\sigma(x)) = \sigma(x) \iff (\sigma^{-1} \tau \sigma)(x) = x.
> $$
> The right-hand condition holds for all $x \in F$ if and only if $\sigma^{-1} \tau \sigma \in \operatorname{Gal}(K/F) = J$, or equivalently, $\tau \in \sigma J \sigma^{-1}$.
> Thus,
> $$
> \operatorname{Gal}(K/\sigma(F)) = \sigma J \sigma^{-1}.
> $$
>
> Under the Galois correspondence, the fixed field of $\sigma J \sigma^{-1}$ is
> $$
> K^{\sigma J \sigma^{-1}} = K^{\operatorname{Gal}(K/\sigma(F))} = \sigma(F).
> $$
>
> ---
>
> ### 2. The Normalizer is Contained in $H$: $N_G(J) \subseteq H$
>
> Let $\sigma \in N_G(J)$, so that $\sigma J \sigma^{-1} = J$.
> Taking the fixed fields of these two equal subgroups:
> $$
> \sigma(F) = K^{\sigma J \sigma^{-1}} = K^J = F.
> $$
> In particular, $\sigma(F) = F \subseteq F$, which means $\sigma \in H$.
> Therefore, $N_G(J) \subseteq H$.
>
> ---
>
> ### 3. $H$ is Contained in the Normalizer: $H \subseteq N_G(J)$
>
> Let $\sigma \in H$, so $\sigma(F) \subseteq F$.
>
> We claim that $\sigma(F) = F$:
> - **Finite Case:** If $[F:k] < \infty$, the restriction $\sigma|_F: F \to F$ is an injective $k$-linear transformation on a finite-dimensional $k$-vector space. By rank-nullity, an injective linear map from a finite-dimensional space to itself is necessarily surjective. Hence $\sigma(F) = F$.
> - **General Algebraic Case:** For any $\alpha \in F$, $\alpha$ is algebraic over $k$ with minimal polynomial $m_\alpha(X) \in k[X]$. Let $R \subset K$ be the finite set of roots of $m_\alpha(X)$ in $K$.
>   The intersection $R_F = R \cap F$ is a non-empty finite set containing $\alpha$.
>   Because $\sigma$ fixes $k$, $\sigma(R) = R$. Since $\sigma(F) \subseteq F$, $\sigma(R_F) \subseteq R \cap F = R_F$.
>   Because $\sigma$ is injective and $R_F$ is a finite set, $\sigma|_{R_F}: R_F \to R_F$ is a bijection.
>   In particular, $\alpha \in R_F = \sigma(R_F) \subseteq \sigma(F)$.
>   Since this holds for every $\alpha \in F$, we have $F \subseteq \sigma(F)$.
>
> Combining $\sigma(F) \subseteq F$ and $F \subseteq \sigma(F)$ gives
> $$
> \sigma(F) = F.
> $$
> Applying the conjugate subgroup identity from Section 1:
> $$
> \sigma J \sigma^{-1} = \operatorname{Gal}(K/\sigma(F)) = \operatorname{Gal}(K/F) = J.
> $$
> Hence $\sigma \in N_G(J)$, which establishes that $H \subseteq N_G(J)$.
>
> ---
>
> ### Conclusion
>
> Both inclusions hold, so
> $$
> H = N_G(J) = N_{\operatorname{Gal}(K/k)}(\operatorname{Gal}(K/F)).
> $$
> *(Moreover, $H/J = N_G(J)/J \cong \operatorname{Aut}_k(F)$ describes the full group of $k$-automorphisms of the intermediate field $F$.)*

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Normal Subgroups and Extensions]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Routing:** Galois Theory is primary because this exercise establishes the Galois-theoretic interpretation of normalizers and automorphism groups of non-normal intermediate fields.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 15, printed p. 323, PDF p. 338.
