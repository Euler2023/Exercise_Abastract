---
title: "Exercise LA592: Matrix Bounds for Proper Discontinuity"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.1, Exercise 2.1.3, printed p. 47, PDF p. 62"
source_refs:
  - "S7/ch-2/sec-1/ex-3"
created: 2026-10-28
---

# Exercise LA592: Matrix Bounds for Proper Discontinuity

## Problem Statement

> [!question] Original Exercise 2.1.3
> (a) Establish inequality (2.2). (A hint for this exercise is at the end of the book.)
>
> (b) Show that the set of matrices in $SL_2(\mathbb Z)$ with bottom row $(c,d)$ is
> $$
> \left\{\begin{bmatrix}1&k\\0&1\end{bmatrix}\begin{bmatrix}a&b\\c&d\end{bmatrix}:k\in\mathbb Z\right\}
> $$
> where $(a,b)$ is any particular pair such that $ad-bc=1$.
>
> (c) The first part of the proof of Proposition 2.1.1 can also be argued by studying the particular point $i$. Show that in the group $SL_2(\mathbb R)$, the subgroup of elements fixing $i$ is the special orthogonal group $SO_2(\mathbb R)$. Note that the group $SL_2(\mathbb R)$ takes $i$ to any point $\tau=x+iy\in\mathcal H$ since the function $s:\mathcal H\longrightarrow SL_2(\mathbb R)$ given by
> $$
> s(\tau)=\frac1{\sqrt y}\begin{bmatrix}y&x\\0&1\end{bmatrix}
> $$
> satisfies $s(\tau)i=\tau$. (So now the upper half plane has a purely group theoretic description, $\mathcal H\cong SL_2(\mathbb R)/SO_2(\mathbb R)$.) Use these facts to show that for any $\gamma\in SL_2(\mathbb R)$ and $e_1,e_2\in\mathcal H$, the conditions $\gamma(e_1)=e_2$ and $\gamma\in s(e_2)SO_2(\mathbb R)s(e_1)^{-1}$ are equivalent. Let $e_1$ range over the compact closure of the set $U_1'$ in the proof, and similarly for $e_2$, to show that $\gamma(U_1')$ intersects $U_2'$ only for $\gamma$ in a certain compact subset of $SL_2(\mathbb R)$. Since $\gamma$ must also lie in the discrete subgroup $SL_2(\mathbb Z)$, conclude that only finitely many such $\gamma$ exist.
>
> **Referenced inequality (2.2), printed p. 46 / PDF p. 61.** The sets $U_1',U_2'$ are open neighborhoods whose closures are compact subsets of $\mathcal H$. For all but finitely many primitive integer pairs $(c,d)$,
> $$
> \sup\{\operatorname{Im}(\gamma\tau):\gamma\in SL_2(\mathbb Z)\text{ has bottom row }(c,d),\ \tau\in U_1'\}
> <\inf\{\operatorname{Im}\tau:\tau\in U_2'\}.
> $$

## Hints

> [!hint]- Hint 1
> In (a), compactness supplies $0<m_1\le\operatorname{Im}\tau\le M_1$ and $|\operatorname{Re}\tau|\le X$ on $\overline{U_1'}$, and a positive lower height $m_2$ on $U_2'$. Use $\operatorname{Im}(\gamma\tau)=\operatorname{Im}\tau/|c\tau+d|^2$.

> [!hint]- Hint 2
> Large $|c|$ is controlled by $|c\tau+d|\ge |c|\operatorname{Im}\tau$. Once $|c|$ is bounded, large $|d|$ is controlled by $|c\operatorname{Re}\tau+d|\ge |d|-|c|X$. Choose the bounds so the entire supremum is at most $m_2/2$.

> [!hint]- Hint 3
> In (b), multiply a second matrix with bottom row $(c,d)$ by the inverse of the chosen matrix. In (c), compute the stabilizer of $i$ and use the continuous image of $\overline{U_2'}\times SO_2(\mathbb R)\times\overline{U_1'}$.

## Solution

> [!success]- Solution
> **Proof scope:** Complete independent derivations of (a), (b) and (c), followed by the neighborhood-shrinking step in Proposition 2.1.1. The topological inputs are compactness of closed bounded subsets of finite-dimensional real space, compactness of finite products, and preservation of compactness by continuous maps.
>
> **(a) A uniform estimate.** Put $K_j=\overline{U_j'}\subset\mathcal H$. Compactness and positivity of the imaginary part give numbers
> $$
> 0<m_1\le\operatorname{Im}\tau\le M_1,\quad |\operatorname{Re}\tau|\le X\quad(\tau\in K_1),
> \qquad m_2=\inf_{\tau\in U_2'}\operatorname{Im}\tau>0.
> $$
> The last strict inequality follows by first taking the positive minimum on $K_2$. For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, multiplication by the conjugate of the denominator yields
> $$
> \operatorname{Im}(\gamma\tau)=\frac{(ad-bc)\operatorname{Im}\tau}{|c\tau+d|^2}
> =\frac{\operatorname{Im}\tau}{|c\tau+d|^2}.
> $$
> This expression is independent of the chosen top row. If $c\ne0$ and $\tau=x+iy\in K_1$, then
> $$
> |c\tau+d|^2=(cx+d)^2+c^2y^2\ge c^2y^2,
> \qquad \operatorname{Im}(\gamma\tau)\le\frac1{c^2y}\le\frac1{c^2m_1}.
> $$
> Choose $C\ge1$ such that $1/(C^2m_1)<m_2/2$. For every integer $c$ with $|c|>C$, the last bound is strictly below $m_2/2$, uniformly in $d,\tau$, and the top row of $\gamma$.
>
> For the remaining finitely many $c$, with $|c|\le C$, choose $D>CX+\sqrt{2M_1/m_2}$. If $|d|>D$, then
> $$
> |cx+d|\ge |d|-|c|X>D-CX>\sqrt{2M_1/m_2},
> $$
> whence, uniformly in $\tau\in U_1'$,
> $$
> \operatorname{Im}(\gamma\tau)\le\frac{M_1}{(cx+d)^2}
> \le\frac{M_1}{(|d|-CX)^2}<\frac{m_2}{2}.
> $$
> Thus outside the finite rectangle $|c|\le C$, $|d|\le D$, the supremum in (2.2) is at most $m_2/2<m_2$. This proves (2.2), including its strict uniform inequality. Restricting to primitive pairs merely restricts this finite exceptional set.
>
> **(b) Fixing the bottom row.** Let
> $$
> A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad
> A'=\begin{pmatrix}a'&b'\\c&d\end{pmatrix}
> $$
> be integral determinant-one matrices with the same bottom row. Since $A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$, the bottom row of $A'A^{-1}$ is $(0,1)$. The product is integral with determinant $1$, so its top left entry is $1$. Therefore
> $$
> A'A^{-1}=\begin{pmatrix}1&k\\0&1\end{pmatrix}
> \quad\text{for some }k\in\mathbb Z,
> \qquad A'=\begin{pmatrix}1&k\\0&1\end{pmatrix}A.
> $$
> Conversely, every product on the right has determinant $1$ and bottom row $(c,d)$. This proves precisely the asserted description.
>
> Combining (a) and (b) also proves finiteness by entry bounds. Only finitely many bottom rows can give an intersection. For each such row choose one matrix $A$. The sets $A(K_1)$ and $K_2$ are compact in $\mathcal H$ and hence have bounded real parts. Since
> $$
> \begin{pmatrix}1&k\\0&1\end{pmatrix}A(U_1')=A(U_1')+k,
> $$
> their intersection with $U_2'$ is possible for only finitely many integers $k$.
>
> **(c) A compact matrix set.** A real determinant-one matrix $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ fixes $i$ exactly when $ai+b=i(ci+d)=-c+di$. Comparing real and imaginary parts gives $b=-c$ and $a=d$. The determinant condition becomes $a^2+b^2=1$, so
> $$
> SL_2(\mathbb R)_i
> =\left\{\begin{pmatrix}a&b\\-b&a\end{pmatrix}:a^2+b^2=1\right\}
> =SO_2(\mathbb R).
> $$
> These are exactly the real orthogonal determinant-one matrices: their columns are orthonormal, and conversely an orthonormal positively oriented pair has this form. This group is compact, being the continuous image of the unit circle.
>
> For $\tau=x+iy$, the displayed $s(\tau)$ has determinant $1$ and
> $$
> s(\tau)i=\frac{yi+x}{1}=\tau.
> $$
> Thus the action is transitive, and $gSO_2(\mathbb R)\mapsto g(i)$ gives a bijection $SL_2(\mathbb R)/SO_2(\mathbb R)\to\mathcal H$. It is also a homeomorphism with the quotient topology: its inverse is the continuous map $\tau\mapsto s(\tau)SO_2(\mathbb R)$, and continuity in the other direction follows from the continuous orbit map and the quotient definition.
>
> For $e_1,e_2\in\mathcal H$,
> $$
> \begin{aligned}
> \gamma(e_1)=e_2
> &\Longleftrightarrow s(e_2)^{-1}\gamma s(e_1)(i)=i\\
> &\Longleftrightarrow s(e_2)^{-1}\gamma s(e_1)\in SO_2(\mathbb R)\\
> &\Longleftrightarrow\gamma\in s(e_2)SO_2(\mathbb R)s(e_1)^{-1}.
> \end{aligned}
> $$
> Consider the set
> $$
> K=\{s(e_2)ks(e_1)^{-1}:e_1\in K_1,\ e_2\in K_2,\ k\in SO_2(\mathbb R)\}.
> $$
> The function $s$ is continuous on $\mathcal H$, and matrix multiplication and inversion are continuous. Hence $K$ is the continuous image of the compact product $K_2\times SO_2(\mathbb R)\times K_1$ and is compact in $SL_2(\mathbb R)$. If $\gamma(U_1')\cap U_2'\ne\varnothing$, choose $e_1\in U_1'$ with $e_2=\gamma e_1\in U_2'$. The equivalence above puts $\gamma$ in $K$.
>
> Every matrix entry is bounded on $K$. Only finitely many integral matrices can satisfy these bounds, so $K\cap SL_2(\mathbb Z)$ is finite. This proves the required finiteness directly, including the closedness needed when using a compact-set argument with a discrete subgroup.
>
> **From finiteness to Proposition 2.1.1.** For the chosen centers $\tau_1,\tau_2$, let $F$ be the finite set of matrices with $\gamma(U_1')\cap U_2'\ne\varnothing$ and $\gamma\tau_1\ne\tau_2$. For each $\gamma\in F$, choose disjoint open sets $A_\gamma,B_\gamma$ about $\gamma\tau_1,\tau_2$. Define
> $$
> U_1=U_1'\cap\bigcap_{\gamma\in F}\gamma^{-1}(A_\gamma),\qquad
> U_2=U_2'\cap\bigcap_{\gamma\in F}B_\gamma.
> $$
> These remain neighborhoods of their centers. If $\gamma(U_1)\cap U_2\ne\varnothing$, then $\gamma(U_1')\cap U_2'\ne\varnothing$. The matrix cannot belong to $F$, since then the intersection would be contained in $A_\gamma\cap B_\gamma=\varnothing$. Therefore $\gamma\tau_1=\tau_2$, which is the proposition's asserted conclusion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** All parts of the exercise were checked on the 200 dpi image of printed p. 47 / PDF p. 62, and (2.2) and Proposition 2.1.1 on printed p. 46 / PDF p. 61. The solution is independently derived; it is not labeled as a proof supplied by the exercise statement.
- **Uniformity:** Bounds must hold uniformly over $U_1'$ and all top rows with the fixed bottom row. Pointwise decay in $(c,d)$ would not by itself prove the supremum inequality. The proof supplies a common strict margin $m_2/2$.
- **Direction of the section:** The printed $s(\tau)$ sends $i$ to $\tau$, so $s(\tau)^{-1}$ sends $\tau$ to $i$. This direction is essential for the conjugation formula.
- **Routing:** Uniform matrix-entry estimates, orthogonal matrices, and compactness in finite-dimensional matrix space are the primary tools, so this multipart exercise remains one Linear Algebra and Modules note.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
