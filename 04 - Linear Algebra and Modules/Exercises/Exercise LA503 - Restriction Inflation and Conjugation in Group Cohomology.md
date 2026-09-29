---
title: "Exercise LA503: Restriction Inflation and Conjugation in Group Cohomology"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 6, printed pp. 827–828, PDF pp. 842–843"
created: 2026-09-29
---

# Exercise LA503: Restriction Inflation and Conjugation in Group Cohomology

## Problem Statement

> [!question] Lang XX.6 — Morphisms of the cohomology functor
> Let $\lambda:G'\to G$ be a group homomorphism. Then $\lambda$ gives rise to an exact functor
> $$
> \Phi_\lambda:\operatorname{Mod}(G)\to\operatorname{Mod}(G'),
> $$
> because every $G$-module can be viewed as a $G'$-module by defining the operation of $\sigma'\in G'$ to be $\sigma'a=\lambda(\sigma')a$. Thus we obtain a cohomology functor $H_{G'}\circ\Phi_\lambda$.
>
> Let $G'$ be a subgroup of $G$. In dimension $0$, we have a morphism of functors $\lambda^*:H_G^0\to H_{G'}^0\circ\Phi_\lambda$ given by the inclusion $A^G\hookrightarrow A^{G'}=\Phi_\lambda(A)^{G'}$.
>
> (a) Show that there is a unique morphism of $\delta$-functors
> $$
> \lambda^*:H_G\to H_{G'}\circ\Phi_\lambda
> $$
> which has the above effect on $H_G^0$. We have the following important special cases.
>
> **Restriction.** Let $H$ be a subgroup of $G$. Let $A$ be a $G$-module. A function from $G$ into $A$ restricts to a function from $H$ into $A$. In this way, we get a natural homomorphism called the restriction
> $$
> \mathrm{res}:H^q(G,A)\to H^q(H,A).
> $$
> **Inflation.** Suppose that $H$ is normal in $G$. Let $A^H$ be the subgroup of $A$ consisting of those elements fixed by $H$. Then it is immediately verified that $A^H$ is stable under $G$, and so is a $G/H$-module. The inclusion $A^H\hookrightarrow A$ induces a homomorphism
> $$
> H_G^q(u)=u_q:H^q(G,A^H)\to H^q(A).
> $$
> Define the inflation
> $$
> \mathrm{inf}_{G/H}^{H}:H^q(G/H,A^H)\to H^q(G,A)
> $$
> as the composite of the functorial morphism $H^q(G/H,A^H)\to H^q(G,A^H)$ followed by the induced homomorphism $u_q=H_G^q(u)$ as above.
>
> In dimension $0$, the inflation gives the identity $(A^H)^{G/H}=A^G$.
>
> (b) Show that the inflation can be expressed on the standard cochain complex by the natural map which to a function of $G/H$ in $A^H$ associates a function of $G$ into $A^H\subset A$.
>
> (c) Prove that the following sequence is exact.
> $$
> 0\longrightarrow H^1(G/H,A^H)
> \xrightarrow{\mathrm{inf}}H^1(G,A)
> \xrightarrow{\mathrm{res}}H^1(H,A).
> $$
>
> (d) Describe how one gets an operation of $G$ on the cohomology functor $H_G$ “by conjugation” and functoriality.
>
> (e) In (c), show that the image of restriction on the right actually lies in $H^1(H,A)^G$ (the fixed subgroup under $G$).
>
> **Remark.** There is an analogous result for higher cohomology groups, whose proof needs a spectral sequence of Hochschild–Serre. See [La 96], Chapter VI, §2, Theorem 2. It is actually this version for $H^2$ which is applied to $H^2(G,K^*)$, when $K$ is a Galois extension, and is used in class field theory [ArT 67].

> [!info] Notation in the source
> The target $H^q(A)$ in the inflation paragraph abbreviates $H^q(G,A)$. A degree-$q$ cochain has $q$ group arguments. Part (d) literally prints $H_G$; conjugation does define an action there, and we also give the action on $H_H$ needed in (e).

## Hints

> [!hint]- Hint 1: Pull back each group argument
> Define $\lambda^*f(g'_1,\ldots,g'_q)=f(\lambda(g'_1),\ldots,\lambda(g'_q))$. For (c), subtract a coboundary so that a restricted one-cocycle vanishes on $H$.

> [!hint]- Hint 2: Check values on both sides of a coset
> If $f|_H=0$, compare $f(gh)$ and $f(hg)$ to show $f$ descends to $G/H$ with values in $A^H$. For conjugation use $(g\cdot f)(h_1,\ldots,h_q)=g f(g^{-1}h_1g,\ldots,g^{-1}h_qg)$.

## Solution

> [!success]- Independent cochain construction and exactness argument
> Use inhomogeneous cochains $C^q(G,A)=\operatorname{Map}(G^q,A)$ with
> $$
> \begin{aligned}
> (\delta f)(g_1,\ldots,g_{q+1})
> ={}&g_1 f(g_2,\ldots,g_{q+1})\\
> &+\sum_{j=1}^q(-1)^j f(g_1,\ldots,g_jg_{j+1},\ldots,g_{q+1})\\
> &+(-1)^{q+1}f(g_1,\ldots,g_q).
> \end{aligned}
> $$
>
> **(a).** The pullback in Hint 1 commutes with $\delta$: multiplication of adjacent arguments is preserved by $\lambda$, and the first action term agrees with the pulled-back module action. It is natural in $A$. A short exact sequence of modules gives a degreewise exact sequence of cochains, and pullback commutes with its connecting homomorphisms. Thus it induces a morphism of delta-functors. In degree zero it sends $a\in A^G$ to the same element in $\Phi_\lambda(A)^{G'}$.
>
> The functor $H_G^q$ is effaceable for $q>0$ by embedding modules into injectives, on which positive cohomology vanishes. Lang's universality theorem for effaceable delta-functors therefore says that a degree-zero natural map extends uniquely. It applies here because $\Phi_\lambda$ is exact, so $H_{G'}\circ\Phi_\lambda$ is a delta-functor. This proves uniqueness, and also covers an arbitrary homomorphism $\lambda$, not only subgroup inclusions.
>
> **(b).** The subgroup $A^H$ is $G$-stable: if $a\in A^H$, then $h(ga)=g(g^{-1}hg)a=ga$. Its action factors through $G/H$. Applying (a) to $G\to G/H$, then including coefficients, gives
> $$
> (\mathrm{inf}\,f)(g_1,\ldots,g_q)=f(g_1H,\ldots,g_qH)\in A^H\subset A.
> $$
> This is exactly the source description, with all cochain arguments displayed.
>
> **(c).** A one-cocycle satisfies $f(xy)=f(x)+xf(y)$, so $f(1)=0$. An inflated cocycle vanishes on $H$, and restriction of its class is zero.
>
> Suppose an inflated cocycle from $G/H$ is a coboundary $g\mapsto ga-a$ in $A$. Evaluating on $h\in H$ gives $ha=a$. Thus $a\in A^H$, and the original quotient cocycle is already a coboundary in $A^H$. Inflation is injective.
>
> Conversely, if the restriction of a cocycle $f:G\to A$ has zero class, it is $h\mapsto ha-a$ for some $a\in A$. Replace $f$ by $f-\delta a$, without changing its class, to arrange $f|_H=0$. Then $f(gh)=f(g)$ for $h\in H$. Since $hg=g(g^{-1}hg)$ and $H$ is normal,
> $$
> h f(g)=f(hg)=f(g).
> $$
> Hence $f$ is constant on quotient cosets with values in $A^H$. Its cocycle identity becomes the cocycle identity on $G/H$, proving exactness.
>
> **(d).** For any normal subgroup $K\triangleleft G$ (in particular $K=G$ or $K=H$), define on cochains
> $$
> (g\cdot f)(k_1,\ldots,k_q)
> =g f(g^{-1}k_1g,\ldots,g^{-1}k_qg).
> $$
> These maps form a $G$-action. Substitution into the displayed coboundary formula shows they commute with $\delta$, so they act on $H^q(K,A)$ naturally. For $g\in K$, the induced action is the identity: as a natural endomorphism of the universal cohomology delta-functor on $\operatorname{Mod}(K)$ it is the identity in degree zero, since $g$ fixes $A^K$, and uniqueness forces it to be the identity in every degree. Thus the action for $K=H$ factors through $G/H$, and for $K=G$ it is trivial.
>
> **(e).** If $f:G\to A$ is a one-cocycle, then for $g\in G$, $h\in H$,
> $$
> \begin{aligned}
> g f(g^{-1}hg)
> &=g f(g^{-1})+f(hg)\\
> &=-f(g)+f(h)+h f(g).
> \end{aligned}
> $$
> The difference from $f(h)$ is the $H$-coboundary $h\mapsto h f(g)-f(g)$. Hence the restricted class is fixed by every $g$, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext|Derived functors and delta-functors]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 6, printed pp. 827–828, PDF pp. 842–843], including all five parts and the printed remark. The bibliography labels in that remark are retained as printed, without importing their results.
- Proof status: independent cochain calculations. The named uniqueness input is Theorem 7.1 [printed p. 801, PDF p. 816]; no Hochschild–Serre spectral sequence is used.
- Normality of $H$ is required for inflation and the conjugation action used in (e), but not for restriction.
- The sequence in (c) asserts exactness at its first two nonzero terms; it does not assert that restriction is surjective.

