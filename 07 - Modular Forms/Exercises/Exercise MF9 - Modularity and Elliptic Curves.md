---
title: "Exercise MF9: Explicit Modular Form Spaces from Eta Products"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 3, §3.5, Exercise 3.5.4(a)–(c), printed p. 89, PDF p. 103"
source_refs:
  - "S7/ch-3/sec-5/ex-4"
created: 2026-01-19
---

# Exercise MF9: Explicit Modular Form Spaces from Eta Products

## Problem Statement

> [!question] Original Exercise 3.5.4
> **3.5.4.** (a) Let $p$ be prime. Exercise 3.1.4(b) showed that $X_0(p)$ has exactly two cusps. Use this to show that
> $$
> M_2(\Gamma_0(p))=S_2(\Gamma_0(p))\oplus\mathbb C G_{2,p},
> $$
> where $G_{2,p}$ was defined in Section 1.2.
>
> (b) Let $k$ and $N$ be positive with $k(N+1)=24$ and $k$ even. Thus $(k,N)$ is one of $(2,11)$, $(4,5)$, $(6,3)$, $(8,2)$, or $(12,1)$. Show that $\dim(S_k(\Gamma_0(N)))=1$. It follows from Proposition 3.2.2(b) that $S_k(\Gamma_0(N))=S_k(\Gamma_1(N))=\mathbb C\varphi_k$ where
> $$
> \varphi_k(\tau)=\eta(\tau)^k\eta(N\tau)^k.
> $$
>
> (c) What do (a) and (b) combine to say about $M_2(\Gamma_0(11))$?

## Hints

> [!hint]- Hint 1
> (a) Apply Theorem 3.5.1 with $k=2$ and two cusps. Compare $\dim M_2$ and $\dim S_2$. The constant term of $G_{2,p}$ at infinity is $2\zeta(2)(1-p)$, which is nonzero.

> [!hint]- Hint 2
> (b) For prime $N$, use the index $N+1$, two cusps, and the counts of roots of $x^2+1$ and $x^2-x+1$ modulo $N$ to compute the genus. Treat $k=2$ separately from the formula for even $k\geq4$.

> [!hint]- Hint 3
> To justify the $\Gamma_1(N)$ assertion without assuming in advance that the eta product is modular, put $g=\varphi_k^{N+1}=(2\pi)^{-24}\Delta(\tau)\Delta(N\tau)$. For a cusp form $h$, show that $h^{N+1}/g$ has no poles on $X_1(N)$. The nonzero $\Gamma_0(N)$ form supplied by the dimension computation then makes $\varphi_k$ itself modular.

## Solution

> [!success]- Independent solution
> This is an independent derivation using the book's genus and dimension theorems. All substitutions, normalizations, and the quotient argument for $\Gamma_1(N)$ are supplied below. Page references refer to Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, GTM 228, 2005, corrected fourth printing, 2016.
>
> **Conventions and inputs from the book.** Put $q=e^{2\pi i\tau}$ and $\sigma_1(n)=\sum_{d\mid n,\ d>0}d$. The book defines
> $$
> G_2(\tau)=2\zeta(2)-8\pi^2\sum_{n\geq1}\sigma_1(n)q^n,
> \qquad G_{2,N}(\tau)=G_2(\tau)-NG_2(N\tau).
> $$
> Thus $E_2=G_2/(2\zeta(2))=1-24\sum_{n\geq1}\sigma_1(n)q^n$ has constant term 1, whereas $G_2$ has constant term $2\zeta(2)$. These formulas and the weight-two transformation formula (1.4) are in §1.2, printed p. 18, PDF p. 33. Also,
> $$
> \eta(\tau)=q^{1/24}\prod_{n\geq1}(1-q^n),
> \qquad \Delta_{\mathrm{book}}(\tau)=(2\pi)^{12}\eta(\tau)^{24},
> $$
> as in §1.2, printed p. 20, PDF p. 35. Consequently, for $(k,N)=(12,1)$, $\varphi_{12}=\eta^{24}=(2\pi)^{-12}\Delta_{\mathrm{book}}$.
>
> Let $g$ be the genus of $X(\Gamma)$, let $\varepsilon_2,\varepsilon_3$ count its elliptic points of periods 2 and 3, and let $c$ count its cusps. Theorem 3.5.1, printed pp. 87–88, PDF pp. 101–102, gives
> $$
> \begin{aligned}
> \dim M_2(\Gamma)&=g-1+c, &\dim S_2(\Gamma)&=g,\\
> \dim S_k(\Gamma)&=(k-1)(g-1)+\lfloor k/4\rfloor\varepsilon_2+\lfloor k/3\rfloor\varepsilon_3+(k/2-1)c\quad(k\geq4\text{ even}).
> \end{aligned}
> $$
> All weights used here are even, so adjoining $-I$ to a group does not change these spaces.
>
> **(a) A one-dimensional complement to the cusp forms.** Since $X_0(p)$ has two cusps,
> $$
> \dim M_2(\Gamma_0(p))=g+1,
> \qquad \dim S_2(\Gamma_0(p))=g.
> $$
> We must also verify that $G_{2,p}$ belongs to the first space but not the second. Formula (1.4) is equivalent to
> $$
> G_2(\gamma\tau)=(c\tau+d)^2G_2(\tau)-2\pi i c(c\tau+d),
> \qquad \gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z).
> $$
> For $\gamma\in\Gamma_0(p)$, put
> $$
> \gamma'=\begin{pmatrix}a&pb\\c/p&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z),
> \qquad p\gamma\tau=\gamma'(p\tau).
> $$
> Applying the transformation formula to both terms of $G_{2,p}$ cancels the two nonhomogeneous terms and yields
> $$
> G_{2,p}(\gamma\tau)=(c\tau+d)^2G_{2,p}(\tau).
> $$
> The function $G_{2,p}$ is holomorphic on the upper half-plane. At the cusp $\infty$, its displayed $q$-expansion has no negative powers. At the other cusp, 0, take $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$; the same transformation formula gives
> $$
> (G_{2,p}|_2S)(\tau)=\tau^{-2}G_{2,p}(-1/\tau)=G_2(\tau)-p^{-1}G_2(\tau/p).
> $$
> The right side is a power series in $q_p=e^{2\pi i\tau/p}$ with no negative powers. Thus $G_{2,p}$ is holomorphic at 0 as well, proving $G_{2,p}\in M_2(\Gamma_0(p))$. Its constant term at infinity is
> $$
> a_0(G_{2,p})=2\zeta(2)(1-p)\neq0,
> $$
> so it is not a cusp form. Hence $S_2\cap\mathbb C G_{2,p}=\{0\}$. The dimensions of these two subspaces sum to $g+1=\dim M_2$, giving
> $$
> M_2(\Gamma_0(p))=S_2(\Gamma_0(p))\oplus\mathbb C G_{2,p}.
> $$
>
> **(b) Prime-level data and the five dimension computations.** We use the genus formula in Theorem 3.1.1, printed p. 68, PDF p. 82, as a **named input**:
> $$
> g=1+\frac{\mu}{12}-\frac{\varepsilon_2}{4}-\frac{\varepsilon_3}{3}-\frac c2,
> $$
> where $\mu$ is the degree of the map to $X(1)$. This formula follows from Riemann–Hurwitz; the book leaves part of the proof to Exercise 3.1.3(b). We do not reprove that theorem here. The even-weight dimension theorem, Theorem 3.5.1, is likewise an explicitly cited input.
>
> First let the level be a prime $p$. Taking the projective class of a matrix's bottom row modulo $p$ defines a bijection
> $$
> \Gamma_0(p)\backslash\mathrm{SL}_2(\mathbb Z)\longrightarrow\mathbb P^1(\mathbb F_p),
> \qquad\Gamma_0(p)\begin{pmatrix}a&b\\c&d\end{pmatrix}\longmapsto[c:d].
> $$
> Left multiplication by $\Gamma_0(p)$ multiplies the bottom row modulo $p$ by a nonzero scalar, so the map is well defined. If two bottom rows represent the same projective point, the lower-left entry of the first matrix times the inverse of the second is zero modulo $p$. The matrices therefore lie in the same left coset, proving injectivity. The matrices $\begin{pmatrix}1&0\\j&1\end{pmatrix}$ for $j=0,\ldots,p-1$, together with $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, give all points $[j:1]$ and $[1:0]$, proving surjectivity. Hence $\mu=p+1$.
>
> Write a cusp in lowest terms as $a/c$, with $\gcd(a,c)=1$. If $p\mid c$, Bezout's identity supplies $b,d$ with $ad-bc=1$. Then $\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(p)$ sends $\infty$ to $a/c$. If $p\nmid c$, then $\gcd(c,pa)=1$, so there are integers $u,v$ with $uc-pva=1$. The matrix $\begin{pmatrix}u&a\\pv&c\end{pmatrix}\in\Gamma_0(p)$ sends 0 to $a/c$. The two classes are distinct: under $\gamma=\begin{pmatrix}u&v\\pw&z\end{pmatrix}\in\Gamma_0(p)$, the new denominator is $pwa+zc$, where $z\not\equiv0\pmod p$. Divisibility of the denominator by $p$ is therefore preserved. A unimodular matrix preserves coprimality of the numerator and denominator, so reduction of the fraction does not change this conclusion. Thus there are exactly two cusps, and $c=2$.
>
> For the elliptic points, use the classification of stabilizers for the full modular group established in [[07 - Modular Forms/Exercises/Exercise MF2 - Fundamental Domain|Exercise MF2]]. The stabilizers of the two special orbits are generated in $\mathrm{PSL}_2(\mathbb Z)$ by $S$ and $ST$, of orders 2 and 3, where $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Their right actions on the left cosets above are
> $$
> [c:d]\cdot S=[d:-c],\qquad[c:d]\cdot ST=[d:-c+d].
> $$
> Points above a special orbit correspond to orbits of its cyclic stabilizer on the coset set. A coset fixed by the entire stabilizer corresponds exactly to a point retaining the full stabilizer of order 2 or 3; all other orbits have trivial stabilizers. Thus $\varepsilon_2$ and $\varepsilon_3$ count the fixed points of these two actions. A fixed projective line must have $c\neq0$. Writing $x=d/c$, the fixed-point conditions become
> $$
> x=-1/x\quad\Longleftrightarrow\quad x^2+1=0,
> \qquad x=(x-1)/x\quad\Longleftrightarrow\quad x^2-x+1=0.
> $$
> This proves the required root-count formulas directly, rather than assuming a solution to Exercise 3.1.4(a)–(d). For $N=1$, the group is the full modular group and its index is 1. Every primitive cusp is the image of $\infty$ under a matrix completed by Bezout's identity, so there is one cusp. The two special orbits give $\varepsilon_2=\varepsilon_3=1$.
>
> Substituting these finite data into the genus and dimension formulas gives
>
> | $(k,N)$ | $\mu$ | $\varepsilon_2$ | $\varepsilon_3$ | $c$ | $g$ | $\dim S_k(\Gamma_0(N))$ |
> | --- | ---: | ---: | ---: | ---: | ---: | --- |
> | $(2,11)$ | 12 | 0 | 0 | 2 | 1 | $g=1$ |
> | $(4,5)$ | 6 | 2 | 0 | 2 | 0 | $-3+2+2=1$ |
> | $(6,3)$ | 4 | 0 | 1 | 2 | 0 | $-5+2+4=1$ |
> | $(8,2)$ | 3 | 1 | 0 | 2 | 0 | $-7+2+6=1$ |
> | $(12,1)$ | 1 | 1 | 1 | 1 | 0 | $-11+3+4+5=1$ |
>
> For example, modulo 5 the roots of $x^2+1$ are 2 and 3, while $x^2-x+1$ has none. Modulo 3 the first polynomial has no roots and the second has only the root 2. Modulo 2 the first has only the root 1 and the second has none. Neither has a root modulo 11. The $N=1$ row uses the two elliptic points and single cusp of $X(1)$. Thus all five genus and dimension computations are explicit. In particular, every row supplies a nonzero $f_0\in S_k(\Gamma_0(N))$.
>
> **The equality for $\Gamma_1(N)$ without assuming modularity of the eta product.** Put
> $$
> \varphi_k(\tau)=\eta(\tau)^k\eta(N\tau)^k,
> \qquad g_N(\tau)=\varphi_k(\tau)^{N+1}=(2\pi)^{-24}\Delta_{\mathrm{book}}(\tau)\Delta_{\mathrm{book}}(N\tau).
> $$
> The identity follows from $k(N+1)=24$. The function $g_N$ is a weight-24 cusp form for $\Gamma_0(N)$ with no zeros in the upper half-plane. When $N>1$, the level is one of the primes considered above. At infinity, $g_N=q^{N+1}(1+O(q))$. At 0, the transformation $\Delta_{\mathrm{book}}(-1/\tau)=\tau^{12}\Delta_{\mathrm{book}}(\tau)$ gives
> $$
> (g_N|_{24}S)(\tau)=N^{-12}g_N(\tau/N)=N^{-12}q_N^{N+1}(1+O(q_N)).
> $$
> Thus its vanishing order at each cusp of $X_0(N)$ is $N+1$.
>
> The same order holds at every cusp of $X_1(N)$. To check this, represent the cusp as $\alpha\infty$, where $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$, and put $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Then
> $$
> \alpha T^h\alpha^{-1}=\begin{pmatrix}1-ach&a^2h\\-c^2h&1+ach\end{pmatrix}.
> $$
> For prime $N$, if $N\mid c$, the cusp has width 1 for both $\Gamma_0(N)$ and $\Gamma_1(N)$. If $N\nmid c$, the lower-left entry forces $N\mid h$. Taking $h=N$ also makes both diagonal entries congruent to 1 modulo $N$, so both widths are $N$. Hence $X_1(N)\to X_0(N)$ is unramified at the cusps, and the vanishing orders of $g_N$ are unchanged. When $N=1$, the groups coincide, and $g_1=\eta^{48}$ has order $2=N+1$ at the unique cusp.
>
> Now take $h\in S_k(\Gamma_1(N))$. Since numerator and denominator have the same weight,
> $$
> F=\frac{h^{N+1}}{g_N}
> $$
> is an invariant function of weight 0. It is holomorphic on the upper half-plane. At each cusp, the numerator has order at least $N+1$ and the denominator has order exactly $N+1$, so it remains holomorphic there. Therefore $F$ is a holomorphic function on the compact Riemann surface $X_1(N)$, and is constant.
>
> If $h\neq0$, that constant is nonzero and
> $$
> \left(\frac h{\varphi_k}\right)^{N+1}=F\in\mathbb C^*.
> $$
> The holomorphic function $h/\varphi_k$ on the connected upper half-plane takes values in a finite set of $(N+1)$st roots, so it is constant. Every $h$ is consequently a multiple of $\varphi_k$. Apply this to the nonzero $f_0\in S_k(\Gamma_0(N))\setminus\{0\}$ whose existence was established above. We obtain $f_0=C\varphi_k$ with $C\neq0$, which now proves that $\varphi_k\in S_k(\Gamma_0(N))$. Thus
> $$
> S_k(\Gamma_0(N))=S_k(\Gamma_1(N))=\mathbb C\varphi_k.
> $$
> This supplies the complete quotient argument for the application of Proposition 3.2.2(b), printed pp. 75–76, PDF pp. 89–90.
>
> **(c) Weight-two forms of level 11.** Combining part (a) with $p=11$ and part (b) with $(k,N)=(2,11)$ gives
> $$
> M_2(\Gamma_0(11))=\mathbb C\,\eta(\tau)^2\eta(11\tau)^2\oplus\mathbb C\bigl(G_2(\tau)-11G_2(11\tau)\bigr),
> \qquad \dim M_2(\Gamma_0(11))=2.
> $$
> To normalize the constant term of the second basis vector to 1, take
> $$
> H_{11}(\tau)=\frac{11E_2(11\tau)-E_2(\tau)}{10}=-\frac{3}{10\pi^2}G_{2,11}(\tau).
> $$
> The first basis vector has leading term $q$, while the second has constant term 1, confirming their linear independence.

## Related Concepts

- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]

## Notes

- **Source and proof status:** The problem is the complete Exercise 3.5.4(a)–(c) in Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, GTM 228, Springer, 2005, corrected fourth printing, 2016, §3.5, printed p. 89, PDF p. 103. The solution is an independent derivation in this vault.
- **Inputs and scope:** The genus formula is Theorem 3.1.1, printed p. 68, PDF p. 82; the even-weight dimension theorem is Theorem 3.5.1, printed pp. 87–88, PDF pp. 101–102; the eta-product quotient argument is Proposition 3.2.2, printed pp. 75–76, PDF pp. 89–90. The first two theorems are explicitly named inputs. The book leaves part of the proof of the genus theorem to Exercise 3.1.3(b). The prime-level index, cusp classification, and elliptic-point root counts needed here are proved directly in this note, followed by all five dimension substitutions. The quotient argument is also supplied in full. No proof of Riemann–Roch is claimed here.
- **Source issue — typographical errors in a prerequisite proof:** On printed p. 76, PDF p. 90, the proof of Proposition 3.2.2 gives the width of a cusp above 0 as $N+1$; it should be $N$. The number $N+1$ is the vanishing order of $g_N$. The root of unity used after taking $(N+1)$st roots is also indexed by $N$, where order $N+1$ is required. The solution above checks widths with stabilizer matrices and uses connectedness for the finite root set. Exercise 3.5.4 itself needs no correction.
- **Appendix:** Appendix A, printed p. 417, PDF p. 428, gives hints for the neighboring Exercises 3.5.3 and 3.5.5 but no separate hint for 3.5.4. The hints here are independently written.
- **Further exercises:** [[04 - Linear Algebra and Modules/Exercises/Exercise LA581 - Three Eigenforms in a Four Dimensional Oldspace|Exercise LA581]] contains the complete original Exercise 5.8.3. [[07 - Modular Forms/Exercises/Exercise MF13 - Hecke Eigenvalues of Generalized Eisenstein Series|Exercise MF13]] treats the Hecke eigenvalues of generalized Eisenstein series and provides related examples for the weight-two complement studied here.
- **Finite verification:** The root counts, genera, and integer arithmetic in all five dimension rows have been independently checked. This finite verification supports the substitutions; the genus and dimension theorems remain the named inputs stated above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman exercise archive]]. This note is counted as the single original Exercise 3.5.4. Its learning status remains `not-started`.
