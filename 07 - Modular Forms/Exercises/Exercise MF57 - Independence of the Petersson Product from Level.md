---
title: "Exercise MF57: Independence of the Petersson Product from Level"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.4, Exercise 5.4.3, printed p. 184, PDF p. 198"
source_refs:
  - "S7/ch-5/sec-4/ex-3"
created: 2026-10-28
---

# Exercise MF57: Independence of the Petersson Product from Level

## Problem Statement

> [!question] Original Exercise 5.4.3
> Show that if $\Gamma'\subset\Gamma\subset SL_2(\mathbb Z)$ are congruence subgroups then $\langle\ ,\ \rangle_{\Gamma'}=\langle\ ,\ \rangle_\Gamma$ on $S_k(\Gamma)$. (A hint for this exercise is at the end of the book.)
>
> **Definition 5.4.1, printed p. 183 / PDF p. 197.** The normalized product is
> $$
> \langle f,g\rangle_\Gamma=\frac1{V_\Gamma}\int_{X(\Gamma)}f(z)\overline{g(z)}(\operatorname{Im}z)^k\,d\mu(z).
> $$

## Hints

> [!hint]- Hint 1
> Use the effective groups $\widehat\Gamma=\{\pm I\}\Gamma$ and $\widehat\Gamma'=\{\pm I\}\Gamma'$.

> [!hint]- Hint 2
> Both the integral of a $\Gamma$-invariant function and the volume multiply by $[\widehat\Gamma:\widehat\Gamma']$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $f,g\in S_k(\Gamma)$ and put $\Phi(z)=f(z)\overline{g(z)}y^k$. For $\eta\in\Gamma$, modularity and $\operatorname{Im}(\eta z)=y/|j(\eta,z)|^2$ give $\Phi(\eta z)=\Phi(z)$. Scalar $-I$ acts identically on the argument, so $\Phi$ is also invariant under $\widehat\Gamma$.
>
> Choose disjoint coset decompositions
> $$
> SL_2(\mathbb Z)=\coprod_i\widehat\Gamma\alpha_i,\qquad
> \widehat\Gamma=\coprod_{j=1}^r\widehat\Gamma'\beta_j.
> $$
> They combine to $SL_2(\mathbb Z)=\coprod_{i,j}\widehat\Gamma'\beta_j\alpha_i$. Using the source definition of quotient integration as a sum over these translates of $\mathcal D^*$,
> $$
> \begin{aligned}
> \int_{X(\Gamma')}\Phi\,d\mu
> &=\sum_{i,j}\int_{\mathcal D^*}\Phi(\beta_j\alpha_i z)d\mu(z)\\
> &=r\sum_i\int_{\mathcal D^*}\Phi(\alpha_i z)d\mu(z)
> =r\int_{X(\Gamma)}\Phi\,d\mu.
> \end{aligned}
> $$
> Taking $\Phi=1$ in the same decomposition proves $V_{\Gamma'}=rV_\Gamma$. The source's cusp-decay argument makes the displayed integrals absolutely convergent for cusp forms [printed p. 183 / PDF p. 197]. Dividing the integral identity by the volume identity gives $\langle f,g\rangle_{\Gamma'}=\langle f,g\rangle_\Gamma$. This effective-group proof covers groups with different containment of $-I$ as well.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.4.3, printed p. 184 / PDF p. 198]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Hint provenance:** The combined effective coset decomposition is the hint in Appendix A, printed p. 422 / PDF p. 433. The proof explicitly tracks both the volume and the integral.
- **Boundary:** Without the factor $1/V_\Gamma$, the two unnormalized integrals differ by $[\widehat\Gamma:\widehat\Gamma']$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
